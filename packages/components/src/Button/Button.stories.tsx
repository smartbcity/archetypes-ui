import React from 'react'
import { Button as AruiButton, ButtonProps } from './Button'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Button',
  component: AruiButton
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <AruiButton {...args}>{args.children}</AruiButton>
)

export const Button = Template.bind({})
Button.args = {
  children: 'Mon Bouton'
}
