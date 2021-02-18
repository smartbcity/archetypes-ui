import React, { useState } from 'react'
import { DatePicker as AruiDatePicker, DatePickerProps } from './DatePicker'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { styles, classes } from './types'

export default {
  title: 'Components/DatePicker',
  component: AruiDatePicker,
  argTypes: {
    classes: {
      table: {
        type: {
          summary: 'DatePickerClasses',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'DatePickerStyles',
          detail: styles
        }
      }
    }
  }
} as Meta

const Template: Story<DatePickerProps> = (args: DatePickerProps) => {
  const [date, setDate] = useState('')
  return (
    <AruiDatePicker
      {...args}
      onChange={(date: string) => setDate(date)}
      value={date}
    />
  )
}

export const DatePicker = Template.bind({})
DatePicker.args = {
  label: 'Date Picker'
}

DatePicker.storyName = 'DatePicker'
