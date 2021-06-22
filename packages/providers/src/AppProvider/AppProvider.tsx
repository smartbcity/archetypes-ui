import React, { Suspense, useMemo } from 'react'
import { Provider } from "react-redux";
import { i18n as I18nType } from 'i18next'
import { I18nextProvider } from 'react-i18next'
import { ConnectedRouter } from "connected-react-router";
import initI18next from './i18n';
import { AnyAction, Store } from 'redux';
import { History } from 'history';

export interface AppProviderProps<Languages extends { [K in keyof Languages]: string } = {}> {
    /**
     * The application that will be provided 
     */
    children?: React.ReactNode
    /**
     * The languages used to init the i18n instance
     */
    languages?: Languages
    /**
     * This prop will override the default i18n instance
     */
    i18nOverride?: I18nType
    /**
     * The instance of the redux store
     */
    reduxStore: Store<any, AnyAction>
    /**
     * The instance of the history in the redux store
     */
    history: History<unknown>
    /**
     * The component that will be displayed when the providers are initializing
     */
    loadingComponent: JSX.Element
}

export const AppProvider = <Languages extends { [K in keyof Languages]: string } = {}>(props: AppProviderProps<Languages>) => {
    const { i18nOverride, languages = {fr: "fr-FR"}, loadingComponent, reduxStore, children, history } = props
    const i18n = useMemo(() => i18nOverride || initI18next(languages), [i18nOverride, languages])
    return (
        <Provider store={reduxStore}>
            <I18nextProvider i18n={i18n}>
                <Suspense fallback={loadingComponent}>
                    <ConnectedRouter history={history}>
                        {children}
                    </ConnectedRouter>
                </Suspense>
            </I18nextProvider>
        </Provider>
    )
}
