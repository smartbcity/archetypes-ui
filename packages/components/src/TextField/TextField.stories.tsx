import React, { useState } from 'react'
import { TextField as AruiTextField, TextFieldProps } from './TextField'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { styles, classes } from './types'

export default {
  title: 'Components/TextField',
  component: AruiTextField,
  argTypes: {
    classes: {
      table: {
        type: {
          summary: 'TextFieldStyles',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'TextFieldStyles',
          detail: styles
        }
      }
    }
  }
} as Meta

const Template: Story<TextFieldProps> = (args: TextFieldProps) => {
  const [value, setValue] = useState('')
  return (
    <AruiTextField
      {...args}
      defaultValue={value}
      onChange={(value) => setValue(value)}
    />
  )
}

export const TextField = Template.bind({})
TextField.args = {
  label: 'Label'
}

TextField.storyName = 'TextField'
