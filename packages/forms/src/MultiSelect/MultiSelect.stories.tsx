import React, {useState} from 'react'
import {MultiSelect, MultiSelectProps} from './MultiSelect'
import {Option} from '../Select'
import {MultiSelectBox} from './MultiSelectBox'
import {Meta} from "@storybook/react";
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/MultipleSelect',
  component: MultiSelect,
} as Meta;

const options: Option[] = [
  { label: 'test1', value: 'test' },
  { label: 'test2', value: 'test2' },
  { label: 'test3', value: 'test3' },
  { label: 'test4', value: 'test4' },
  { label: 'test5', value: 'test5' }
]

export const MultipleSelectStory: Story<MultiSelectProps> = () => {
  const [zoneValue, setValue] = useState<string[]>([])

  const handleChange = (selected: string[]) => {
    setValue(selected)
  }
  return (
    <>
      <MultiSelect
        values={zoneValue}
        onChange={(e) => handleChange(e)}
        id='test'
        options={options}
        placeHolder={'Chargeur'}
        style={{ width: 350 }}
      />

      <MultiSelect
        values={zoneValue}
        onChange={(e) => handleChange(e)}
        id='test'
        options={options}
        placeHolder={'Chargeur'}
        error={true}
        errorMessage={'Champs obligatoire'}
      />

      <MultiSelect
        values={zoneValue}
        onChange={(e) => handleChange(e)}
        id='test'
        options={options}
        placeHolder={'Chargeur'}
        error={true}
        errorMessage={'Champs obligatoire'}
      />

      <MultiSelectBox
        values={zoneValue}
        onChange={(e) => handleChange(e)}
        id='test'
        options={options}
        placeHolder={'Chargeur'}
        errorMessage={'Champs obligatoire'}
      />
    </>
  )
}

MultipleSelectStory.storyName = "MultipleSelect"
