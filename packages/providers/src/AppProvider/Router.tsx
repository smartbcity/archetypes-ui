import { MergeMuiElementProps } from '@smartb/archetypes-ui-themes'
import React from 'react'
import { Route, Switch, SwitchProps } from 'react-router'
import { NoMatchPage } from './NoMatchPage'

interface RouterBasicProps {
    /**
     * The component display by the root if the user is authorized and if the current route match the one you gave
     */
    children?: React.ReactNode
    /**
     * By default the noMatch redirection goes to the `NoMatchPage` component but you can override it with this prop
     * 
     * @default NoMatchPage
     */
    noMatchComponent?: JSX.Element
}

export type RouterProps = MergeMuiElementProps<SwitchProps, RouterBasicProps>

export const Router = (props: RouterProps) => {
    const { children, noMatchComponent, ...other } = props
    return (
        <Switch
            {...other}
        >
            {children}
            <Route path="*">
                {noMatchComponent || <NoMatchPage />}
            </Route>
        </Switch>
    )
}
