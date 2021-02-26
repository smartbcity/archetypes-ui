import { Box, InputLabel } from '@material-ui/core'
import React from 'react'
import { Option, Select } from '../Select'
import { TextField } from '../TextField'
import {useInputStyles} from "../style";
import {BasicProps, useTheme} from "@smartb/archetypes-ui-components";

export interface InputFormProps extends BasicProps {

  /**
   * The label of the input
   */
  label?: string

  /**
   * The type of the input
   */
  inputType: 'select' | 'textField'

  /**
   * The type of the input contents
   */
  textFieldType?: 'number' | 'text' | 'email' | 'password'

  /**
   * List of option available in the option
   */
  selectOptions?: Option[]

  /**
   * The value displayed
   */
  value?: string | number

  /**
   * The default value displayed
   */
  defaultValue?: string | number
  /**
   * The event called when the value of the input change
   * @param value the new value
   */
  onChange?: (value: string) => void

  /**
   * The classes applied to the input part of the component
   */
  inputClassName?: string

  /**
   * The classes applied to the base part of the component
   */
  baseClassName?: string

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

  /**
   * The event called when the value of the input is removed
   */
  onRemoveValue?: () => void

  /**
   * The icon of the icon
   */
  inputIcon?: React.ReactNode

  /**
   * The position of the icon
   */
  iconPosition?: 'start' | 'end'

  /**
   * The event called when the input is clicked
   */
  onClick?: (event: React.MouseEvent) => void

  /**
   * The event called when the input is blured
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const InputForm = React.forwardRef((props: InputFormProps, ref) => {
  const {
    inputType,
    label,
    onChange,
    className,
    inputClassName,
    baseClassName,
    inputStyle,
    selectOptions = [],
    style,
    textFieldType = 'text',
    value = '',
    id,
    placeHolder = '',
    readonly = false,
    error = false,
    errorMessage = '',
    defaultValue,
    onRemoveValue,
    onBlur,
    inputIcon,
    iconPosition,
    onClick
  } = props
  const theme = useTheme()
  const classes = useInputStyles(theme, readonly)()
  return (
    <Box className={className} style={style}>
      {label ? (
        <InputLabel htmlFor={id} className={classes.label}>
          {label}
        </InputLabel>
      ) : null}
      {readonly ? (
        <TextField
          ref={ref}
          onClick={onClick}
          id={id}
          value={
            inputType === 'select'
              ? selectOptions.find((el) => el.value === value)?.label
              : value
          }
          placeHolder={placeHolder}
          textFieldType={textFieldType}
          className={`${inputClassName}`}
          defaultValue={defaultValue}
          style={inputStyle}
          disabled={true}
          baseClassName={baseClassName}
          inputIcon={inputIcon}
          iconPosition={iconPosition}
          onBlur={onBlur}
        />
      ) : inputType === 'textField' ? (
        <TextField
          ref={ref}
          onClick={onClick}
          id={id}
          value={value}
          onChange={(value: string) => onChange && onChange(value)}
          placeHolder={placeHolder}
          textFieldType={textFieldType}
          className={`${inputClassName}`}
          style={inputStyle}
          error={error}
          baseClassName={baseClassName}
          defaultValue={defaultValue}
          errorMessage={errorMessage}
          inputIcon={inputIcon}
          iconPosition={iconPosition}
          onRemoveValue={onRemoveValue}
          onBlur={onBlur}
        />
      ) : (
        <Select
          ref={ref}
          onClick={onClick}
          id={id}
          value={value}
          onChange={(value: string) => {
            onChange && onChange(value)
          }}
          options={selectOptions}
          className={inputClassName}
          style={inputStyle}
          placeHolder={placeHolder}
          baseClassName={baseClassName}
          error={error}
          onRemoveValue={onRemoveValue}
          errorMessage={error ? errorMessage : undefined}
          onBlur={onBlur}
        />
      )}
    </Box>
  )
})
