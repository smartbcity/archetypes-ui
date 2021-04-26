import { useKeycloak } from "@react-keycloak/web";
import { useCallback, useMemo } from "react";
import { KeycloakInstance } from "keycloak-js";


type AuthService<Additionnals extends AuthUtils = {}, Roles extends string = string> =  {
  getUserId: () => string | undefined
  isAuthorized: (roles: Roles[]) => boolean
} & Additionnals


type KeycloakUtil< T = undefined, R = any> = (keycloak: KeycloakInstance, params?: T) => R

type AuthUtil< T = undefined, R = any> = (params?: T) => R

export type KeycloakUtils< T = {}> = {
  [K in keyof T]: KeycloakUtil<T[K] extends {paramsType: unknown} ? T[K]['paramsType'] : undefined, T[K] extends {returnType: unknown} ? T[K]['returnType'] : undefined>
}
export type AuthUtils< T = {}> = {
  [K in keyof T]: AuthUtil<T[K] extends {paramsType: unknown} ? T[K]['paramsType'] : undefined, T[K] extends {returnType: unknown} ? T[K]['returnType'] : undefined>
}

interface Auth<Additionnals extends AuthUtils = {}, Roles extends string = string> {
  service?: AuthService<Additionnals, Roles>,
  keycloak: KeycloakInstance
}

function useAuth<
AdditionnalServices, 
Roles extends string = string
>(additionnalServices: KeycloakUtils<AdditionnalServices>): Auth<AuthUtils<AdditionnalServices>, Roles>;

function useAuth<
AdditionnalServices, 
Roles extends string = string
>(): Auth<{}, Roles>;

function useAuth<
AdditionnalServices = undefined, 
Roles extends string = string
>(
  additionnalServices?: KeycloakUtils<AdditionnalServices>
  ): Auth<AuthUtils<AdditionnalServices>, Roles> {
  const { initialized, keycloak } = useKeycloak();

  if (!initialized) {
    return { service: undefined, keycloak: keycloak };
  }

  const isAuthorized = useCallback(
    (roles: Roles[]): boolean => {
      if (!roles || roles.length === 0) return true;
      let authorization = false;
      roles.forEach((r) => {
        const realm = keycloak.hasRealmRole(r);
        const resource = keycloak.hasResourceRole(r);
        if (realm || resource) authorization = true;
      });
      return authorization;
    },
    [keycloak],
  )

  const getUserId = useCallback(
    // @ts-ignore
    (): string | undefined => keycloak.tokenParsed?.userId,
    [keycloak],
  )

  const service: AuthService = useMemo(() => ({
    getUserId: getUserId,
    isAuthorized: isAuthorized
  }), [isAuthorized, getUserId])

  const additionnals: AuthUtils<AdditionnalServices> = useMemo(() => {
    const object: AuthUtils<AdditionnalServices> = {} as AuthUtils<AdditionnalServices>
    for (var serviceName in additionnalServices) {
      const fn: AuthUtil = (params) => additionnalServices[serviceName](keycloak, params)
      object[serviceName.toString()] = fn
    } 
    return object;
  }, [additionnalServices, keycloak])
  

  return { service: Object.assign(service, additionnals) , keycloak: keycloak,};
};


export {useAuth};




