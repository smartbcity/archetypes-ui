import React from 'react'
import { Box as AruiBox, BoxProps } from './Box'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Box',
  component: AruiBox
} as Meta

const Template: Story<BoxProps> = (args: BoxProps) => (
  <AruiBox {...args}>{args.children}</AruiBox>
)

export const Box = Template.bind({})
Box.args = {
  children: 'A Box'
}
