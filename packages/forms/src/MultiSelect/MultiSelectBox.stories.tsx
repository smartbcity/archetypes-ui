import React, { useState } from 'react'
import {MultiSelectBox, MultiSelectBoxProps} from './MultiSelectBox'
import { Meta } from '@storybook/react'
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/MultiSelectBox',
  component: MultiSelectBox
} as Meta

export type Option = {
  value: string | number
  label: string | number
}

const options: Option[] = [
  {
    value: 'opt1',
    label: 'option1'
  },
  {
    value: 'opt2',
    label: 2
  }
]

export const MultiSelectBoxStory: Story<MultiSelectBoxProps> = () => {
  const [values, setValues] = useState<string[]>([])

  return (
    <MultiSelectBox
      id={'id'}
      onChange={(value: string[]) => setValues(value)}
      options={options}
      values={values}
    />
  )
}

MultiSelectBoxStory.storyName = "MultiSelectBox"
