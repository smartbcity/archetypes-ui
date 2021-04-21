import React from 'react'
import { Tooltip as AruiTooltip, TooltipBasicProps } from './Tooltip'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { Button } from '../Buttons'

export default {
  title: 'Components/Tooltip',
  component: AruiTooltip
} as Meta

const Template: Story<TooltipBasicProps> = (args: TooltipBasicProps) => {
  const { open, ...other } = args
  return (
    <AruiTooltip {...other} open={open ? true : undefined}>
      <Button>Element to tooltiped</Button>
    </AruiTooltip>
  )
}

export const Tooltip = Template.bind({})

Tooltip.args = {
  helperText: 'A helper message'
}

Tooltip.storyName = 'Tooltip'
