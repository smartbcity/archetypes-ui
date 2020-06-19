import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {
  DatePicker as SBDatePicker,
  ThemeContextProvider
} from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'
import { myTheme } from '../../../Docs/Theme/Theme'
import mdx from './DatePicker.mdx'

export default {
  title: 'Components|DatePicker',
  decorators: [withKnobs, withA11y],
  parameters: {
    docs: {
      page: mdx
    }
  }
}

const useStyles = makeStyles(() =>
  createStyles({
    color: {
      color: 'blue'
    }
  })
)

export const DatePicker = () => {
  const classes = useStyles()
  const [date, setDate] = useState('')
  const label = text('label', 'Start')
  return (
    <ThemeContextProvider theme={myTheme}>
      <SBDatePicker
        value={date}
        label={label}
        onChange={(date: string) => setDate(date)}
        classes={{ input: classes.color }}
      />
    </ThemeContextProvider>
  )
}
