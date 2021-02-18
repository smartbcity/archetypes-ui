import React from 'react'
import { Select as AruiSelect, SelectBasicProps } from './Select'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { styles, classes, SelectItem, onChange } from './types'

export default {
  title: 'Components/Select',
  component: AruiSelect,
  argTypes: {
    items: {
      table: {
        type: {
          summary: 'SelectItem[]',
          detail: SelectItem
        }
      }
    },
    onChange: {
      table: {
        type: {
          summary: 'onChange',
          detail: onChange
        }
      }
    },
    classes: {
      table: {
        type: {
          summary: 'SelectClasses',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'SelectStyles',
          detail: styles
        }
      }
    }
  }
} as Meta

const Template: Story<SelectBasicProps> = (args: SelectBasicProps) => (
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
