import React, {useState} from 'react'
import {Select, Option, SelectBasicProps} from './Select'
import {Meta} from "@storybook/react";
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/Select',
  component: Select,
} as Meta;

export const SelectStory: Story<SelectBasicProps> = (args: SelectBasicProps) => {


  return (
    <Select
      options={[]}
      {...args}
      style={{ width: 350 }}
    />
  )
}

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

SelectStory.args = {
  options: options
}

SelectStory.storyName = "Select"
