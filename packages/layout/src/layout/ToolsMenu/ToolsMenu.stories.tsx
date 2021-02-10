import React from 'react'
import { ToolsMenu as AruiToolsMenu, ToolsMenuProps } from './ToolsMenu'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import {
  AccountCircle,
  ContactPhone,
  Payment,
  Settings
} from '@material-ui/icons'

export default {
  title: 'Components/ToolsMenu',
  component: AruiToolsMenu
} as Meta

const Template: Story<ToolsMenuProps> = (args: ToolsMenuProps) => (
  <AruiToolsMenu {...args}></AruiToolsMenu>
)

export const ToolsMenu = Template.bind({})
ToolsMenu.args = {
  display: 'list',
  menu: {
    label: 'profile',
    key: 'profile',
    icon: <AccountCircle />,
    items: [
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
    ]
  }
}
