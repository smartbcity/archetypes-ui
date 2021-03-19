import React from 'react'
import {
  InputAdornment,
  InputLabel,
  makeStyles,
  TextField as MuiTextField
} from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import { useInputStylesSimple } from '../style'
import { BasicProps } from '@smartb/archetypes-ui-themes'

export interface TextFieldProps extends BasicProps {
  /**
   * The id of the text field displayed
   */
  id?: string

  /**
   * The value displayed
   */
  value?: string | number

  /**
   * The type of the input
   */
  textFieldType?: 'number' | 'text' | 'email' | 'password'

  /**
   * The event called when the value of the input change
   * @param value the new value
   */
  onChange?: (value: string) => void

  /**
   * The text to display as place holder
   */
  placeHolder?: string

  /**
   * Define if the value of the input is valid or not
   */
  error?: boolean

  /**
   * The message displayed when the input value is wrong
   */
  errorMessage?: string

  /**
   * The default value displayed
   */
  defaultValue?: string | number

  /**
   * The classes applied to the different part of the component
   */
  className?: string

  /**
   * The label of the input
   */
  label?: string

  /**
   * Define if the input is disabled or not
   */
  disabled?: boolean

  /**
   * The styles applied to the different part of the component
   */
  style?: React.CSSProperties

  /**
   * The classes applied to the textField part of the component
   */
  textFieldClassName?: string

  /**
   * The classes applied to the base part of the component
   */
  baseClassName?: string

  /**
   * The styles applied to the text of the component
   */
  helperTextStyle?: React.CSSProperties

  /**
   * The icon of the icon
   */
  inputIcon?: React.ReactNode

  /**
   * The event called when the value of the input is removed
   */
  onRemoveValue?: () => void

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
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const useStyles = makeStyles(() => ({
  withIconStart: {
    '& .MuiInputBase-input': {
      paddingLeft: '0px !important',
      paddingRight: '8px !important'
    }
  },
  withIconEnd: {
    '& .MuiInputBase-input': {
      paddingLeft: '5px !important'
    }
  }
}))

export const TextField = React.forwardRef((props: TextFieldProps, ref) => {
  const {
    className,
    error = false,
    errorMessage = '',
    label = '',
    textFieldClassName,
    helperTextStyle,
    id = '',
    onChange,
    placeHolder = '',
    style,
    textFieldType,
    baseClassName = '',
    defaultValue,
    value = '',
    disabled = false,
    inputIcon,
    onRemoveValue,
    iconPosition = 'start',
    onClick,
    onBlur
  } = props
  const classes = useInputStylesSimple(disabled)()
  const classesLocal = useStyles()
  return (
    <div
      className={`${className}`}
      style={{ width: '100%', position: 'relative', ...style }}
    >
      {label ? (
        <InputLabel htmlFor={id} className={classes.label}>
          {label}
        </InputLabel>
      ) : null}
      <MuiTextField
        id={id}
        value={defaultValue != undefined ? null : value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onBlur={onBlur}
        onClick={onClick}
        placeholder={placeHolder}
        type={textFieldType}
        defaultValue={defaultValue}
        className={`${textFieldClassName} ${classes.input} Colisactiv-TextFieldInput`}
        variant='filled'
        error={error}
        disabled={disabled}
        helperText={error ? errorMessage : ''}
        color={'primary'}
        InputProps={{
          ref: ref,
          startAdornment: !!inputIcon && iconPosition === 'start' && (
            <InputAdornment component='div' position='start'>
              {inputIcon}
            </InputAdornment>
          ),
          endAdornment: !!inputIcon && iconPosition === 'end' && (
            <InputAdornment component='div' position='end'>
              {inputIcon}
            </InputAdornment>
          ),
          disableUnderline: true,
          style: { paddingRight: onRemoveValue ? '22px' : '' },
          inputProps: {
            className: baseClassName,
            min: 0
          },
          className:
            inputIcon && iconPosition === 'start'
              ? classesLocal.withIconStart
              : inputIcon && iconPosition === 'end'
              ? classesLocal.withIconEnd
              : ''
        }}
        FormHelperTextProps={{
          className: classes.helperText,
          style: helperTextStyle
        }}
      />
      {value !== '' && onRemoveValue && (
        <Clear onClick={onRemoveValue} className={classes.clear} />
      )}
    </div>
  )
})
