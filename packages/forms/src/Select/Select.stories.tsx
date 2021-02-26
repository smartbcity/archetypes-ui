import React, {useState} from 'react'
import {Select, Option} from './Select'
import {Meta} from "@storybook/react";
import {Story} from "@storybook/react/types-6-0";
import {SelectProps} from "@material-ui/core";

export default {
  title: 'Forms/Select',
  component: Select,
} as Meta;

export const SelectStory: Story<SelectProps> = () => {
  const [value, setValue] = useState('')
  const options: Option[] = [
    {
      value: 1,
      label: 'test1'
    },
    {
      value: 2,
      label: 'test2'
    }
  ]

  return (
    <Select
      label='test'
      value={value}
      options={options}
      onChange={(value) => {
        setValue(value as string)
      }}
      id='test'
      style={{ width: 350 }}
    />
  )
}

SelectStory.storyName = "Select"
