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
import { Box, Button, Typography } from '@material-ui/core'
import {
  ArgsTable,
  PRIMARY_STORY,
  Subtitle
} from '@storybook/addon-docs/blocks'
import { styles, classes, StyleProps, MenuItem } from './types'
import LinkTo from '@storybook/addon-links/react'

export default {
  title: 'Layout/DrawerMenu',
  component: AruiDrawerMenu,
  parameters: {
    docs: {
      page: () => (
        <>
          <ArgsTable story={PRIMARY_STORY} />
          <Subtitle>References</Subtitle>
          <Box display='flex' flexDirection='column'>
            <Typography variant='body2' style={{ marginBottom: '5px' }}>
              -{' '}
              <LinkTo kind='Layout' story='ToolsMenu'>
                ToolsMenuProps
              </LinkTo>
            </Typography>
          </Box>
        </>
      )
    }
  },
  argTypes: {
    toolsMenuProps: {
      table: {
        type: {
          summary: 'ToolsMenuProps[]'
        }
      },
      control: null
    },
    menu: {
      table: {
        type: {
          summary: 'MenuItem[]',
          detail: MenuItem
        }
      },
      control: null
    },
    styleProps: {
      table: {
        type: {
          summary: 'StyleProps',
          detail: StyleProps
        }
      },
      control: null
    },
    navBarContent: {
      control: null
    },
    classes: {
      table: {
        type: {
          summary: 'DrawermenuClasses',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'DrawermenuStyles',
          detail: styles
        }
      }
    }
  }
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

DrawerMenu.storyName = 'DrawerMenu'
