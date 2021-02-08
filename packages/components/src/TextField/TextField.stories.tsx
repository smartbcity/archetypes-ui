import React, { useState } from 'react'
import { TextField as AruiTextField, TextFieldProps } from './TextField'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/TextField',
  component: AruiTextField
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
