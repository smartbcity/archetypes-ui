import React from 'react'
import {
  KeycloakProvider as AruiKeycloakProvider
} from './KeycloakProvider'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { useAuth, KeycloackService } from "./useAuth"
import { Button } from '@smartb/archetypes-ui-components'
import { Link, Typography } from '@material-ui/core'
import {
  ArgsTable,
  PRIMARY_STORY,
  Subtitle,
  Primary,
  Description
} from '@storybook/addon-docs/blocks'
import { CodeHighlighter } from '@smartb/archetypes-ui-components'
import {localUseAuth, staticUseAuth, keycloakConfig, informRoles} from "./docs"

export default {
  title: 'Providers/KeycloakProvider',
  component: AruiKeycloakProvider,
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary /> 
          <ArgsTable story={PRIMARY_STORY} />
          <Subtitle>References</Subtitle>
            <Typography variant='body2' style={{ margin: '5px', marginBottom: "20px" }}>
              -{' '}
              <Link href='https://github.com/keycloak/keycloak-documentation/blob/master/securing_apps/topics/oidc/javascript-adapter.adoc'>
                Keycloak init options
              </Link>
            </Typography>
            <Subtitle>The hook useAuth</Subtitle>
            <Description>
              This hook allow you to have access of the keyclaok instance and utility functions. You can statically extends the autService like so:
            </Description>
            <CodeHighlighter code={staticUseAuth} />
            <Description>
              Keycloak instance will be automatically injected to every extending functions. ⚠️ You have to inform the hook about the return type `ReturnType` of the function and the prameters type `ParamsType`.
              To dynamically extends the authService you can do it like so:
            </Description>
            <CodeHighlighter code={localUseAuth} />
            <Description>
              The authService contains already 2 functions. One for veifying if the current user has the wanted roles `isAuthorized` and another one to get the current user id `getUserId`.
            </Description>
            <Description>
              You can inform the roles by giving a type to the useAuth hook. ⚠️ Your additionnal services should be inform of those roles as well:
            </Description>
            <CodeHighlighter code={informRoles} />
        </>
      )
    }
  },
  argTypes: {
    config: {
      table: {
        type: {
          summary: 'KeycloakConfig',
          detail: keycloakConfig
        }
      }
    }
  }
} as Meta

const Template: Story = () => {
  return (
    <AruiKeycloakProvider
      config={{ clientId: "plateform-web", realm: "server", url: "https://colisactiv.smart-b.io/auth" }}
      initOptions={{onLoad: "check-sso"}}
      loadingComponent={<Typography>Loading ...</Typography>}
    >
      <ConnectButton />
    </AruiKeycloakProvider>
  )
}

type Roles = "admin" | "user"

type StaticServices = {
  getRoles: { returnType: Roles[] | undefined, paramsType: {test: boolean}},
}

const staticServices: KeycloackService<StaticServices, Roles> = {
  getRoles: (keycloak) => {
    return keycloak.tokenParsed?.realm_access?.roles
  }
}

const useExtendedAuth = () => {
  return useAuth<StaticServices, Roles>(staticServices)
}

const ConnectButton = () => {
  const { keycloak } = useExtendedAuth()
  if (keycloak.authenticated) {
    return (
      <>
      <Typography>The token you received from the authentication server:</Typography>
      <CodeHighlighter object={keycloak.tokenParsed} />
      <Button onClick={() => keycloak.logout()}>Disconnect from Smartb</Button>
      </>
    )
  }
  return (
    <Button onClick={() => keycloak.login()}>Connect with Smartb</Button>
  )
}

export const KeycloakProvider = Template.bind({})

KeycloakProvider.storyName = 'KeycloakProvider'
KeycloakProvider.id = 'KeycloakProvider'
