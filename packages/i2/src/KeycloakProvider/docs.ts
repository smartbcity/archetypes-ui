export const staticUseAuth = `
interface CustomToken {
  token?: string,
  tokenParsed?: Keycloak.KeycloakTokenParsed
}

type StaticServices = {
  getToken: { returnType: CustomToken, paramsType: {withParse?: boolean}},
}

const staticServices: KeycloackUtils<StaticServices> = {
  getToken: (keycloack, params) => {
    if (params?.withParse) {
      return {
        token: keycloack.token,
        tokenParsed: keycloack.tokenParsed
      }
    }
    return {
      token: keycloack.token
    }
  }
}

const useExtendedAuth = () => useAuth<StaticServices>(staticServices)
`

export const localUseAuth = `
const useExtendedAuth = (extension: string) => {

  type DynamicServices = {
    getExToken: { returnType: string},
  }

  const services: KeycloackUtils<StaticServices & DynamicServices> = useMemo(() => ({
    ...staticServices,
    getExToken: (keycloack) => {
      if (!keycloack.token) return extension
      return keycloack.token + extension
    }
  }), [extension])

  return useAuth<StaticServices & DynamicServices>(services)
}
`

export const keycloakConfig = `
interface KeycloakConfig {
  /**
   * URL to the Keycloak server, for example: http://keycloak-server/auth
   */
  url?: string;
  /**
   * Name of the realm, for example: 'myrealm'
   */
  realm: string;
  /**
   * Client identifier, example: 'myapp'
   */
  clientId: string;
}
`

export const informRoles = `
type Roles = "admin" | "user"

type StaticServices = {
  getRoles: { returnType: Roles[] | undefined},
}

const staticServices: KeycloakUtils<StaticServices, Roles> = {
  getRoles: (keycloak) => {
    return keycloak.tokenParsed?.realm_access?.roles
  }
}

const useExtendedAuth = () => {
  return useAuth<StaticServices, Roles>(staticServices)
}
`

