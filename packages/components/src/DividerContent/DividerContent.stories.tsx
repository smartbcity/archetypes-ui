import React from 'react'
import {
  DividerContent as AruiDividerContent,
  DividerContentProps
} from './DividerContent'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/DividerContent',
  component: AruiDividerContent
} as Meta

const Template: Story<DividerContentProps> = (args: DividerContentProps) => (
  <AruiDividerContent {...args}>
    <>Divider</>
    <>Content</>
  </AruiDividerContent>
)

export const DividerContent = Template.bind({})
DividerContent.args = {}
