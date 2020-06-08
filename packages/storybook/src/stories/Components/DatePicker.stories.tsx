import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import {
  DatePicker as SBDatePicker,
  ThemeContextProvider
} from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'
import { myTheme } from '../../Docs/Theme/Theme'
import { createStyles, makeStyles } from '@material-ui/core/styles'

export default {
  title: 'Components|DatePicker',
  decorators: [withKnobs, withA11y]
}

const useStyles = makeStyles(() =>
  createStyles({
    color:{
      color:"blue"
    }
  })
)


export const DatePicker = () => {
  const classes = useStyles();
  const [date, setDate] = useState('')
  const label = text('label', 'Start')
  return (
    <ThemeContextProvider theme={myTheme}>
      <SBDatePicker
        value={date}
        label={label}
        onChange={(date: string) => setDate(date)}
        inputClassName={classes.color}
      />
    </ThemeContextProvider>
  )
}
