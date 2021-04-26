import { useKeycloak } from "@react-keycloak/web";
import { useCallback, useMemo } from "react";
import { KeycloakInstance, KeycloakTokenParsed } from "keycloak-js";


type AuthService<Additionnals extends AuthUtils = {}, Roles extends string = string> = {
    /**
   * get the variable userId from the token parsed
   * @return {string | undefined} return  the id or undefined if not authenticated
   */
  getUserId: () => string | undefined
   /**
   * Check if the current user has one of the roles given in parameter
   * @param {Roles | string}  roles - The roles that you want to check if the user has them
   * @return {boolean} Return true if the user has one of the roles of if no roles are provided
   */
  isAuthorized: (roles: Roles[]) => boolean
} & Additionnals


type KeycloakUtil<Roles extends string = string, T = undefined, R = any> = (keycloak: KeycloakWithRoles<Roles>, params?: T) => R

type AuthUtil<T = undefined, R = any> = (params?: T) => R

export type KeycloakUtils<T = {}, Roles extends string = string> = {
  [K in keyof T]: KeycloakUtil<Roles, T[K] extends { paramsType: unknown } ? T[K]['paramsType'] : undefined, T[K] extends { returnType: unknown } ? T[K]['returnType'] : undefined>
}
export type AuthUtils<T = {}> = {
  [K in keyof T]: AuthUtil<T[K] extends { paramsType: unknown } ? T[K]['paramsType'] : undefined, T[K] extends { returnType: unknown } ? T[K]['returnType'] : undefined>
}

interface KeycloakTokenParsedWithRoles<Roles extends string = string> extends KeycloakTokenParsed {
  realm_access?: {
    roles: Roles[]
  }
}

interface KeycloakWithRoles<Roles extends string = string> extends KeycloakInstance {
  tokenParsed?: KeycloakTokenParsedWithRoles<Roles>
  hasRealmRole: (role: Roles) => boolean
}

interface Auth<Additionnals extends AuthUtils = {}, Roles extends string = string> {
  service?: AuthService<Additionnals, Roles>,
  keycloak: KeycloakWithRoles<Roles>
}

function useAuth<
  AdditionnalServices,
  Roles extends string = string
>(additionnalServices: KeycloakUtils<AdditionnalServices, Roles>): Auth<AuthUtils<AdditionnalServices>, Roles>;

function useAuth<
  Roles extends string = string
>(): Auth<{}, Roles>;

function useAuth<
  AdditionnalServices = undefined,
  Roles extends string = string
>(
  additionnalServices?: KeycloakUtils<AdditionnalServices, Roles>
): Auth<AuthUtils<AdditionnalServices>, Roles> {
  const { initialized, keycloak } = useKeycloak();

  const keycloakWithRoles: KeycloakWithRoles<Roles> = useMemo(() => keycloak as KeycloakWithRoles<Roles>, [keycloak])

  if (!initialized) {
    return { service: undefined, keycloak: keycloakWithRoles };
  }

  const isAuthorized = useCallback(
    (roles: Roles[]): boolean => {
      if (!roles || roles.length === 0) return true;
      let authorization = false;
      roles.forEach((r) => {
        const realm = keycloakWithRoles.hasRealmRole(r);
        const resource = keycloakWithRoles.hasResourceRole(r);
        if (realm || resource) authorization = true;
      });
      return authorization;
    },
    [keycloakWithRoles],
  )

  const getUserId = useCallback(
    // @ts-ignore
    (): string | undefined => keycloakWithRoles.tokenParsed?.userId,
    [keycloakWithRoles],
  )

  const service: AuthService = useMemo(() => ({
    getUserId: getUserId,
    isAuthorized: isAuthorized
  }), [isAuthorized, getUserId])

  const additionnals: AuthUtils<AdditionnalServices> = useMemo(() => {
    const object: AuthUtils<AdditionnalServices> = {} as AuthUtils<AdditionnalServices>
    for (var serviceName in additionnalServices) {
      const fn: AuthUtil = (params) => additionnalServices[serviceName](keycloakWithRoles, params)
      object[serviceName.toString()] = fn
    }
    return object;
  }, [additionnalServices, keycloakWithRoles])

  return { service: Object.assign(service, additionnals), keycloak: keycloakWithRoles };
};


export { useAuth };




