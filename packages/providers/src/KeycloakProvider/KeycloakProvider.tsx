import React, { useMemo } from 'react'
import Keycloak, { KeycloakConfig, KeycloakInitOptions } from "keycloak-js";
import { ReactKeycloakProvider  } from '@react-keycloak/web';

export interface KeycloakProviderProps {
    /**
     * The keycloack connection configuration
     */
    children?: React.ReactNode
    /**
     * The keycloack connection configuration or a string url to a json containing the keycloak config
     */
    config: KeycloakConfig | string
    /**
     * The keycloack options
     * **See the reference below** ⬇️
     * 
     * @default { checkLoginIframe: false }
     */
    initOptions?: KeycloakInitOptions
    /**
     * The component that will be displayed when keycloack is initializing
     */
    loadingComponent: JSX.Element
}

export const KeycloakProvider = (props: KeycloakProviderProps) => {
    const { config, initOptions, loadingComponent, children } = props

    const init : KeycloakInitOptions = useMemo(() => ({
        checkLoginIframe: false,
        ...initOptions
    }), [initOptions])

    const instance = useMemo(() => Keycloak(config), [config])

    return (
        <ReactKeycloakProvider
            authClient={instance}
            LoadingComponent={loadingComponent}
            initOptions={init}
        >
            {children}
        </ReactKeycloakProvider>
    )
}
