import React, { useState } from 'react'
import {
  DatePickerMobile,
  DatePickerMobileBasicProps
} from './DatePickerMobile'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { styles, classes } from './types'

export default {
  title: 'Forms/DatePickerMobile',
  component: DatePickerMobile,
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

const Template: Story<DatePickerMobileBasicProps> = (args: DatePickerMobileBasicProps) => {
  const [date, setDate] = useState('')
  return (
    <DatePickerMobile
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

DatePicker.storyName = 'DatePickerMobile'
