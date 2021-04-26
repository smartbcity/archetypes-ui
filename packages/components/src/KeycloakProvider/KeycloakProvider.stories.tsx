import React, { useMemo } from 'react'
import {
  KeycloakProvider as AruiKeycloakProvider
} from './KeycloakProvider'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { useAuth, KeycloackUtils } from "./Keycloak"
import { Button } from '../Buttons/Button'
import { Link, Typography } from '@material-ui/core'
import {
  ArgsTable,
  PRIMARY_STORY,
  Subtitle,
  Primary,
  Description
} from '@storybook/addon-docs/blocks'
import { CodeHighlighter } from '../CodeHighlighter'
import {localUseAuth, staticUseAuth, keycloakConfig} from "./types"

export default {
  title: 'Components/KeycloakProvider',
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



const ConnectButton = () => {
  const { service, keycloak } = useExtendedAuth("extended")

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
