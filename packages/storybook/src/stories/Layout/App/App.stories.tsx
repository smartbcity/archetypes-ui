import React, { useState } from 'react'
import defaultLogo from '../../assets/impactcity-logo-2.png'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import {
  MenuItem,
  App as SBApp,
  Menu,
  StyleProps,
  ToolsMenuProps
} from '@smartb/archetypes-ui-layout'
import { Typography, Button } from '@material-ui/core'
import { withA11y } from '@storybook/addon-a11y'
import { MultipleSectionMenuFull } from '../../../Docs/Variables/IconProfile'
import {
  AccountCircle,
  Settings,
  Description,
  ExitToApp
} from '@material-ui/icons'
import { ThemeContextProvider } from '@smartb/archetypes-ui-components'
import { myTheme } from '../../../Docs/Theme/Theme'
import mdx from './App.mdx'

export default {
  title: 'Layout/App',
  decorators: [withKnobs, withA11y],
  parameters: {
    docs: {
      page: mdx
    }
  }
}

export const App = () => {
  const [open, setOpen] = useState(window.innerWidth > 768)
  const title = text('title', 'Smartb')
  const profileMenu: Menu = {
    key: 'Settings',
    goto: action('clicked on preference'),
    label: 'Settings',
    icon: <Settings />,
    items: [
      {
        key: 'preference',
        goto: action('clicked on preference'),
        label: 'preferences',
        items: [
          {
            key: 'preference',
            goto: action('clicked on preference'),
            label: 'preferences'
          },
          {
            key: 'logout',
            goto: action('clicked on logout'),
            label: 'logout'
          }
        ]
      }
    ]
  }

  const profileMenu2: Menu = {
    label: 'profile',
    key: 'profile',
    icon: <AccountCircle />,
    items: [
      {
        key: 'section 1',
        label: 'section 1',
        icon: <AccountCircle />,
        items: [
          {
            key: 'preference',
            label: 'preference',
            icon: <Settings />
          },
          {
            key: 'statement',
            label: 'statement',
            icon: <Description />
          },
          {
            key: 'logout',
            label: 'logout',
            icon: <ExitToApp />
          }
        ]
      }
    ]
  }

  const profileProps1: ToolsMenuProps = {
    menu: MultipleSectionMenuFull,
    display: 'grid'
  }
  const profileProps2: ToolsMenuProps = { menu: profileMenu, display: 'list' }
  const profileProps3: ToolsMenuProps = {
    menu: profileMenu2,
    display: 'list'
  }
  const menu: MenuItem[] = [
    {
      key: 'dashboard',
      goto: () => {
        action('clicked on dashboard')
        window.innerWidth <= 768 && setOpen(!open)
      },
      label: 'dashboard',
      icon: (
        <img style={{ width: '30px', height: '30px' }} src={defaultLogo}></img>
      )
    },
    {
      key: 'activities',
      goto: () => {
        action('clicked on activities')
        window.innerWidth <= 768 && setOpen(!open)
      },
      label: 'activities',
      icon: (
        <img style={{ width: '30px', height: '30px' }} src={defaultLogo}></img>
      )
    },
    {
      key: 'application',
      goto: () => {
        action('clicked on application')
        window.innerWidth <= 768 && setOpen(!open)
      },
      label: 'application',
      icon: (
        <img style={{ width: '30px', height: '30px' }} src={defaultLogo}></img>
      )
    }
  ]
  const styleProps: StyleProps = {
    appBarHeight: 90,
    detailDrawerWidth: 600,
    menuWidth: 210
  }
  return (
    <ThemeContextProvider theme={myTheme}>
      <SBApp
        styleProps={styleProps}
        title={title}
        logo={defaultLogo}
        toolsMenuProps={[profileProps1, profileProps2, profileProps3]}
        menu={menu}
        open={open}
        onToggle={() => setOpen(!open)}
        navBarContent={
          <div>
            <Button onClick={action('clicked on Company')}>Company</Button>
            <Button onClick={action('clicked on Dark mode')}>Dark mode</Button>
          </div>
        }
        drawerContent={<Typography>Drawer content</Typography>}
      />
    </ThemeContextProvider>
  )
}

App.storyName = 'App'