import React from 'react'
import {DatePicker, DatePickerProps} from './DatePicker'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import 'date-fns'
import frLocale from 'date-fns/locale/fr'
import {Meta} from "@storybook/react";
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/DatePickerMobile',
  component: DatePicker,
} as Meta;

export const DatePickerStory: Story<DatePickerProps> = () => {
  let date = new Date()

  const [_, setSelectedDate] = React.useState<Date>(date)

  const handleDateChange = (date: Date) => {
    date && setSelectedDate(date)
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={frLocale}>
      <DatePicker
        value={null}
        onChangeDate={handleDateChange}
        id={'test'}
      />
    </MuiPickersUtilsProvider>
  )
}

DatePickerStory.storyName = "DatePicker"
