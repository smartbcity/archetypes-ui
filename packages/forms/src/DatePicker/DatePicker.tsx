import { InputLabel, makeStyles } from '@material-ui/core'
import { KeyboardDatePicker } from '@material-ui/pickers'
import React  from 'react'
import { Calendar } from '../assets/icons'
import { useInputStylesSimple } from "../style";
import {BasicProps} from "@smartb/archetypes-ui-components";

const useStyles = makeStyles(() => ({
  input: {
    '& .MuiInputBase-input': {
      paddingLeft: 10,
      color: '#98A5AE !important',
      minHeight: 50,
      padding: 0
    }
  },
  noIcon: {
    '& .MuiIconButton-root.Mui-disabled': {
      display: 'none'
    }
  },
  toolbar: {
    '& .MuiPickersToolbar-toolbar': {}
  }
}))

export type ViewsFormat = 'year' | 'month' | 'date'

export interface DatePickerProps extends BasicProps {
  /**
   * The Date entered in the input
   */
  value: Date | string | null
  /**
   * The event called when the value of the input changed
   * @param date
   */
  onChangeDate: (date: Date) => void
  /**
   * The label of the input
   */
  dateLabel?: string
  /**
   * The min Date entered in the input
   */
  minDate?: Date
  /**
   * The max Date entered in the input
   */
  maxDate?: Date
  /**
   * If true, the checkbox will be disabled
   */
  disabled?: boolean
  views?: Array<ViewsFormat>
  openTo?: ViewsFormat
  notUseFormat?: boolean
  /**
   * If true, the valued can be cleared
   */
  clearable?: boolean
  /**
   * Place Holder Message
   */
  placeholder?: string
  /**
   * If true, the toolbar will be disabled
   */
  disableToolBar?: boolean
}

const applyTimezoneOffset = (date: Date): Date => {
  const timestampWithOffset = date.getTime() + date.getTimezoneOffset() * 60000
  return new Date(timestampWithOffset)
}

export const DatePicker = (props: DatePickerProps) => {
  const {
    value,
    onChangeDate,
    className,
    id,
    dateLabel,
    minDate,
    maxDate,
    disabled = false,
    views,
    openTo,
    notUseFormat,
    clearable = false,
    placeholder = '',
    disableToolBar = true
  } = props
  const localClasses = useStyles()
  const classes = useInputStylesSimple(disabled)()

  return (
    <div className={`${className}`}>
      {dateLabel ? (
        <InputLabel htmlFor={id} className={classes.label}>
          {dateLabel}
        </InputLabel>
      ) : null}
      <KeyboardDatePicker
        views={views ? views : ['year', 'month', 'date']}
        openTo={openTo ? openTo : 'date'}
        disableToolbar={disableToolBar}
        clearable={clearable}
        variant={clearable ? 'dialog' : 'inline'}
        cancelLabel={''}
        clearLabel='Vider'
        okLabel='Valider'
        format={notUseFormat ? undefined : 'dd/MM/yy'}
        id={id}
        minDate={minDate && applyTimezoneOffset(minDate)}
        maxDate={maxDate && applyTimezoneOffset(maxDate)}
        invalidDateMessage='Format de date non valide'
        placeholder={placeholder}
        className={
          disabled
            ? `${classes.input} ${localClasses.input} ${localClasses.noIcon} `
            : `${classes.input} ${localClasses.input} `
        }
        InputProps={{
          disableUnderline: true
        }}
        disabled={disabled ? disabled : false}
        value={value}
        onChange={onChangeDate}
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
        keyboardIcon={
          <Calendar
            color='#98A5AE'
            style={{
              width: 15,
              height: 15
            }}
          />
        }
        minDateMessage={''}
      />
    </div>
  )
}
