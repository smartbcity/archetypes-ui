import React from 'react'
import { DrawerMenu as AruiDrawerMenu, DrawerMenuProps } from './DrawerMenu'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import {
  AccountCircle,
  ContactPhone,
  Description,
  ExitToApp,
  Payment,
  Settings
} from '@material-ui/icons'
import { action } from '@storybook/addon-actions'
import { Button } from '@material-ui/core'

export default {
  title: 'Layout/DrawerMenu',
  component: AruiDrawerMenu
} as Meta

const Template: Story<DrawerMenuProps> = (args: DrawerMenuProps) => (
  <AruiDrawerMenu {...args}></AruiDrawerMenu>
)

const profileMenu = {
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

const profileMenu2 = {
  label: 'Profile',
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

export const DrawerMenu = Template.bind({})
DrawerMenu.args = {
  styleProps: {
    detailDrawerWidth: 200,
    appBarHeight: 300,
    menuWidth: 400
  },
  children: 'Some content',
  navBarContent: (
    <div>
      <Button onClick={action('clicked on Button 1')}>Button 1</Button>
      <Button onClick={action('clicked on Button 2')}>Button 2</Button>
    </div>
  ),
  menu: [
    {
      key: 'key1',
      label: 'Section 1',
      icon: <Payment style={{ width: '60px', height: '60px' }} />
    },
    {
      key: 'key2',
      label: 'Section 2',
      icon: <ContactPhone style={{ width: '60px', height: '60px' }} />
    },
    {
      key: 'key3',
      label: 'Section 3',
      icon: <Settings style={{ width: '60px', height: '60px' }} />
    }
  ],
  toolsMenuProps: [
    {
      menu: profileMenu,
      display: 'list'
    },
    {
      menu: profileMenu2,
      display: 'list'
    }
  ]
}
