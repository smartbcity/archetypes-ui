import React, {useState} from 'react'
import {Select, Option, SelectBasicProps} from './Select'
import {Meta} from "@storybook/react";
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/Select',
  component: Select,
} as Meta;

export const SelectStory: Story<SelectBasicProps> = (args: SelectBasicProps) => {

  const [value, setvalue] = useState("")
  const [values, setvalues] = useState([])
  console.log(value)
  return (
    <Select
      options={[]}
      {...args}
      value={args.multiple ? undefined: value}
      values={args.multiple ? values: undefined}
      onChangeValue={(value) => setvalue(value)}
      onChangeValues={(values) => setvalues(values)}
      onRemove={() => {setvalue(""); setvalues([])}}
      style={{ width: 350 }}
    />
  )
}

const options: Option[] = [
  {
    key: 1,
    label: 'test1'
  },
  {
    key: 2,
    label: 'test2'
  },
  {
    key: 3,
    label: 'test3'
  },
  {
    key: 4,
    label: 'test4'
  },
  {
    key: 5,
    label: 'test5'
  },
  {
    key: 6,
    label: 'test6'
  },
  {
    key: 7,
    label: 'test7'
  }
]

SelectStory.args = {
  options: options,
  placeHolder: "Choose a name"
}

SelectStory.storyName = "Select"
