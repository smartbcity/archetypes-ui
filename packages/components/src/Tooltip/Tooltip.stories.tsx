import React from 'react'
import { Tooltip as AruiTooltip, TooltipBasicProps } from './Tooltip'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { Typography } from '@material-ui/core'

export default {
  title: 'Components/Tooltip',
  component: AruiTooltip
} as Meta

const Template: Story<TooltipBasicProps> = (args: TooltipBasicProps) => {
  return (
    <AruiTooltip {...args} open={args.open ? true : undefined}>
      <Typography align='center'>The element to tooltiped</Typography>
    </AruiTooltip>
  )
}

const Template2: Story = () => {
  return (
    <AruiTooltip helperText='A helper message' open>
      <Typography align='center'>The element to tooltiped</Typography>
    </AruiTooltip>
  )
}

export const Tooltip = Template.bind({})

export const PermanentTooltip = Template2.bind({})

Tooltip.args = {
  helperText: 'A helper message'
}

Tooltip.storyName = 'Tooltip'

PermanentTooltip.storyName = 'permanent tooltip'
