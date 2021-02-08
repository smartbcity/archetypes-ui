import React from 'react'
import { Select as AruiSelect, SelectProps } from './Select'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Select',
  component: AruiSelect
} as Meta

const Template: Story<SelectProps> = (args: SelectProps) => (
  <AruiSelect {...args}></AruiSelect>
)

export const Select = Template.bind({})
Select.args = {
  label: 'Label',
  items: [
    {
      value: 'value1',
      label: 'item1'
    },
    {
      value: 'value2',
      label: 'item2'
    }
  ]
}
