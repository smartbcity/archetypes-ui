import { Box, makeStyles, InputLabel } from '@material-ui/core'
import React from 'react'
import { Option } from '../Select'
import { MultiSelect } from './MultiSelect'
import {useInputStylesSimple} from "../style";
import {BasicProps} from "@smartb/archetypes-ui-components";

const useStyles = makeStyles(() => ({
  text: {
    fontWeight: 600,
    color: '#828282 !important'
  },
  noIcon: {
    '& .MuiSelect-icon.Mui-disabled': {
      display: 'none'
    }
  }
}))

export interface MultiSelectBoxProps extends BasicProps {

  /**
   * List of options available in the option
   */
  options?: Option[]

  /**
   * The value displayed
   */
  values?: string[]

  /**
   * The label of the field.
   */
  label?: string

  /**
   * The event called when the value of the input change
   * @param value the new value
   */
  onChange?: (value: string[]) => void

  /**
   * The className applied to the input
   */
  inputClassName?: string

  /**
   * The styles applied to the input
   */
  inputStyle?: React.CSSProperties

  /**
   * The text to display as place holder
   */
  placeHolder?: string

  /**
   * If true the autocomplete will be disabled
   */
  readonly?: boolean

  /**
   * Define if the value of the input is valid or not
   */
  error?: boolean

  /**
   * The message displayed when the input value is wrong
   */
  errorMessage?: string
}

export const MultiSelectBox = (props: MultiSelectBoxProps) => {
  const {
    onChange,
    className,
    inputClassName,
    label,
    inputStyle,
    options = [],
    style,
    values = [],
    id,
    placeHolder = '',
    readonly = false,
    error = false,
    errorMessage = ''
  } = props
  const classesLocal = useStyles()
  const classes = useInputStylesSimple(readonly)()
  return (
    <Box
      className={className}
      style={style}
    >
      {label ? (
        <InputLabel htmlFor={id} className={classes.label}>
          {label}
        </InputLabel>
      ) : null}
      {readonly ? (
        <MultiSelect
          id={id}
          values={values}
          options={options}
          className={`${inputClassName} ${classesLocal.noIcon}`}
          style={inputStyle}
          onChange={(_: string[]) => {}}
          disabled={true}
        />
      ) : (
        <MultiSelect
          id={id}
          values={values}
          onChange={(value: string[]) => {
            onChange && onChange(value)
          }}
          placeHolder={placeHolder}
          options={options}
          className={inputClassName}
          style={inputStyle}
          error={error}
          errorMessage={error ? errorMessage : undefined}
        />
      )}
    </Box>
  )
}
