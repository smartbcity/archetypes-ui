import React from 'react'
import { SBButton as AruiSBButton, SBButtonProps } from './SBButton'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/SBButton',
  component: AruiSBButton
} as Meta

const Template: Story<SBButtonProps> = (args: SBButtonProps) => (
  <AruiSBButton {...args}></AruiSBButton>
)

export const SBButton = Template.bind({})
SBButton.args = {
  children: 'SBButton'
}
