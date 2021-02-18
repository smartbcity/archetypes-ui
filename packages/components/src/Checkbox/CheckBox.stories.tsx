import React from 'react'
import { CheckBox as AruiCheckBox, CheckBoxProps } from './CheckBox'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/CheckBox',
  component: AruiCheckBox
} as Meta

const Template: Story<CheckBoxProps> = (args: CheckBoxProps) => (
  <AruiCheckBox {...args} />
)

export const CheckBox = Template.bind({})
CheckBox.args = {
  checked: false
}
CheckBox.storyName = 'CheckBox'
