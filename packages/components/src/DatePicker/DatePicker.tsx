import React, { useContext } from 'react'
import { InputLabel } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {
  Theme,
  themeContext
} from '../ThemeContextProvider/ThemeContextProvider'

const useStyles = (theme: Theme) =>
  makeStyles(() =>
    createStyles({
      listLabel: {
        color: '#646464',
        fontWeight: 500,
        fontSize: '13px'
      },
      date: {
        boxShadow: theme.shadows[2],
        borderRadius: 25,
        position: 'relative',
        backgroundColor: '#fafafa',
        padding: '7px 13px',
        marginTop: '11px',
        fontSize: 12,
        fontWeight: 300,
        color: '#797979',
        minHeight: '26px',
        width: '100%',
        maxWidth: '200px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
      }
    })
  )

interface DatePickerProps {
  value?: string | Date
  label?: string
  onChange: (date: string) => void
  labelClassName?: string
  inputClassName?: string
}

export const DatePicker = (props: DatePickerProps) => {
  const { value, label, onChange, labelClassName, inputClassName } = props
  const theme = useContext(themeContext)
  const classes = useStyles(theme)()
  return (
    <div>
      {label && (
        <InputLabel
          className={`${classes.listLabel} ${labelClassName && labelClassName}`}
        >
          {label}
        </InputLabel>
      )}
      <input
        value={value ? value.toString() : ''}
        onChange={(event) => onChange(event.target.value)}
        type='date'
        className={`${classes.date} ${inputClassName && inputClassName}`}
      />
    </div>
  )
}
