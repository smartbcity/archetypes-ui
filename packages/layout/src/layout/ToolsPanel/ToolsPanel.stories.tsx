import React from 'react'
import { ToolsPanel as AruiToolsPanel, ToolsPanelProps } from './ToolsPanel'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import defaultLogo from '../assets/impactcity-logo-2.png'
import { AccountCircle } from '@material-ui/icons'

export default {
  title: 'Components/ToolsPanel',
  component: AruiToolsPanel
} as Meta

const Template: Story<ToolsPanelProps> = (args: ToolsPanelProps) => (
  <AruiToolsPanel {...args} />
)

export const ToolsPanel = Template.bind({})
ToolsPanel.args = {
  menu: {
    label: 'profile',
    key: 'profile',
    icon: <AccountCircle />,
    items: [
      {
        key: 'key1',
        goto: () => {},
        label: 'Section 1',
        icon: (
          <img
            style={{ width: '60px', height: '60px' }}
            src={defaultLogo}
            alt='smart b'
          />
        )
      },
      {
        key: 'key2',
        goto: () => {},
        label: 'Section 2',
        icon: (
          <img
            style={{ width: '60px', height: '60px' }}
            src={defaultLogo}
            alt='smart b'
          />
        )
      },
      {
        key: 'key3',
        goto: () => {},
        label: 'Section 3',
        icon: (
          <img
            style={{ width: '60px', height: '60px' }}
            src={defaultLogo}
            alt='smart b'
          />
        )
      }
    ]
  }
}
