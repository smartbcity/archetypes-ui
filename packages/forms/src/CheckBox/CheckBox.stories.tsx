import React, { useState } from 'react'
import {CheckBox, CheckBoxBasicProps} from './CheckBox'
import { Meta } from '@storybook/react'
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/CheckBox',
  component: CheckBox
} as Meta

export const CheckBoxStory: Story<CheckBoxBasicProps> = (args: CheckBoxBasicProps) => {

  return (
    <CheckBox
      {...args}
    />
  )
}

CheckBoxStory.args = {
  label: 'CA Checkbox'
}

CheckBoxStory.storyName = "CheckBox"
