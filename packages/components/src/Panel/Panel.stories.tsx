import React from 'react'
import { Panel as AruiPanel, PanelProps } from './Panel'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Panel',
  component: AruiPanel
} as Meta

const Template: Story<PanelProps> = (args: PanelProps) => (
  <AruiPanel {...args}></AruiPanel>
)

export const Panel = Template.bind({})
Panel.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
    'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n' +
    'minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
    'aliquip ex ea commodo consequat.'
}
