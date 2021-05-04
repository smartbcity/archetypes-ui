import { Meta } from '@storybook/react'
import React from 'react'
import {TextField, TextFieldProps} from './TextField'
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/TextField',
  component: TextField
} as Meta

export const TextFieldStory: Story<TextFieldProps> = (args: TextFieldProps) => {
  return (
    <TextField
      {...args}
    />
  )
}

TextFieldStory.args = {
  placeholder: 'Type something here...'
}

TextFieldStory.storyName = "TextField"
