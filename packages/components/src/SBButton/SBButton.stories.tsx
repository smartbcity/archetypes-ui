import React from 'react'
import { SBButton as AruiSBButton, SBButtonBasicProps } from './SBButton'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/SBButton',
  component: AruiSBButton
} as Meta

const Template: Story<SBButtonBasicProps> = (args: SBButtonBasicProps) => (
  <AruiSBButton {...args}></AruiSBButton>
)

export const SBButton = Template.bind({})
SBButton.args = {
  children: 'SBButton'
}

SBButton.storyName = 'SBButton'
