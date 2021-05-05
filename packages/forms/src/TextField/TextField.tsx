import React, { useCallback, useMemo } from 'react'
import {
  FilledInputProps,
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core'
import { Check, Clear } from '@material-ui/icons'
import { useInputStyles } from '../style'
import { BasicProps, lowLevelStyles, MergeMuiElementProps, useTheme } from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'
import { SearchIcon } from '../assets/icons'

const useStyles = lowLevelStyles()({
  root: {
    position: "relative"
  },
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
  },
  searchIcon: {
    width: "20px",
    height: "20px",
    cursor: "pointer"
  }
})

export interface TextFieldClasses {
  label?: string
  textfield?: string
  input?: string
  inputBase?: string
  helperText?: string
  clearIcon?: string
  validIcon?: string
  searchIcon?: string
}

export interface TextFieldStyles {
  label?: React.CSSProperties
  textfield?: React.CSSProperties
  input?: React.CSSProperties
  inputBase?: React.CSSProperties
  helperText?: React.CSSProperties
  clearIcon?: React.CSSProperties
  validIcon?: React.CSSProperties
  searchIcon?: React.CSSProperties
}

export interface TextFieldBasicProps extends BasicProps {
  /**
   * The value displayed
   */
  value?: string | number

  /**
   * The type of the input
   */
  textFieldType?: 'number' | 'text' | 'email' | 'password' | 'search'

  /**
   * The size of the input
   */
  size?: "large" | "medium" | "small"

  /**
   * Define if the value of the input has been validated
   */
  validated?: boolean

  /**
   * The event called when the value of the input change
   * @param value the new value
   */
  onChange?: (value: string) => void

  /**
   * The text to display as place holder
   */
  placeholder?: string

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
   * Define if the input is disabled or not
   */
  disabled?: boolean

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
   * The event called when a search request is send when the `textFieldType` is equal to 'search'
   */
  onSearch?: () => void

  /**
  * The classes applied to the different part of the component
  */
  classes?: TextFieldClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: TextFieldStyles
}

export type TextFieldProps = MergeMuiElementProps<MuiTextFieldProps, TextFieldBasicProps>

export const TextField = React.forwardRef((props: TextFieldProps, ref) => {
  const {
    className,
    error = false,
    errorMessage = '',
    label = '',
    id = '',
    onChange,
    placeholder = '',
    style,
    textFieldType = "text",
    defaultValue,
    value = '',
    disabled = false,
    inputIcon,
    onRemoveValue,
    classes,
    styles,
    iconPosition = 'start',
    size = "medium",
    validated = false,
    onSearch,
    ...other
  } = props
  const theme = useTheme()
  const defaultClasses = useInputStyles(theme)
  const classesLocal = useStyles()
  
  const onChangeMemoized = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange && onChange(e.target.value),
    [onChange],
  )

  const upHandler = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (event.key === 'Enter') {
        event.currentTarget.blur()
        onSearch && onSearch()
      }
    },
    [onSearch],
  )

  const inputAdornment = useMemo(() => {
    if (textFieldType === "search") {
      if (iconPosition === 'start') {
        return {
          startAdornment: (
            <InputAdornment component='div' position='start'>
              <SearchIcon color="#323338" onClick={onSearch} className={clsx(classesLocal.searchIcon, classes?.searchIcon, "AruiTextfield-searchIcon")} style={styles?.searchIcon} />
            </InputAdornment>
          )
        }
      } else {
        return {
          endAdornment: (
            <InputAdornment component='div' position='end'>
              <SearchIcon color="#323338" onClick={onSearch} className={clsx(classesLocal.searchIcon, classes?.searchIcon, "AruiTextfield-searchIcon")} style={styles?.searchIcon} />
            </InputAdornment>
          )
        }
      }
    } else {
      if (inputIcon && iconPosition === 'start') {
        return {
          startAdornment: (
            <InputAdornment component='div' position='start'>
              {inputIcon}
            </InputAdornment>
          )
        }
      } else if (inputIcon) {
        return {
          endAdornment: (
            <InputAdornment component='div' position='end'>
              {inputIcon}
            </InputAdornment>
          )
        }
      }
      return {}
    }
  }, [textFieldType, inputIcon, iconPosition, classes?.searchIcon, styles?.searchIcon, onSearch])

  const inputProps: Partial<FilledInputProps> = useMemo((): Partial<FilledInputProps> => {
    return {
      ref: ref,
      ...inputAdornment,
      disableUnderline: true,
      onKeyUp: upHandler,
      style: { ...styles?.input, paddingRight: (onRemoveValue || validated) && !inputAdornment.endAdornment ? '27px' : '' },
      inputProps: {
        className: clsx(classes?.inputBase, "AruiTextfield-inputBase"),
        style: styles?.inputBase,
        min: 0
      },
      className: clsx(
        inputIcon && iconPosition === 'start'
          ? classesLocal.withIconStart
          : inputIcon && iconPosition === 'end'
            ? classesLocal.withIconEnd
            : '',
        classes?.input,
        "AruiTextfield-input"
      )
    }
  }, [ref, inputIcon, iconPosition, styles?.input, styles?.inputBase, onRemoveValue, validated, classes?.inputBase, classes?.input, inputAdornment, upHandler])

  const formHelperProps = useMemo(() => {
    return {
      className: clsx(defaultClasses.helperText, classes?.helperText, "AruiTextfield-helperText"),
      style: styles?.helperText
    }
  }, [classes?.helperText, styles?.helperText])

  const rightIcon = useMemo(() => {
    if (value === "") return undefined
    if (validated) return (
      <Check className={clsx(defaultClasses.validated, classes?.validIcon, "AruiTextfield-validIcon")} style={{ ...styles?.validIcon, right: inputAdornment.endAdornment ? "32px" : "" }} />
    )
    if (onRemoveValue || error) return (
      <Clear onClick={onRemoveValue} className={clsx(defaultClasses.clear, error && defaultClasses.clearError, classes?.clearIcon, "AruiTextfield-clearIcon")} style={{ ...styles?.clearIcon, right: inputAdornment.endAdornment ? "32px" : "" }} />
    )
    return undefined
  }, [value, onRemoveValue, classes, styles, inputAdornment.endAdornment, error])

  return (
    <div
      className={clsx(className, classesLocal.root, "AruiTextfield-root")}
      style={style}
    >
      <MuiTextField
        {...other}
        id={id}
        value={defaultValue !== undefined ? null : value}
        onChange={onChangeMemoized}
        placeholder={placeholder}
        type={textFieldType === "search" ? "text" : textFieldType}
        defaultValue={defaultValue}
        className={clsx(
          defaultClasses.input,
          validated && defaultClasses.inputValidated,
          size === "large" && defaultClasses.inputLarge,
          size === "medium" && defaultClasses.inputMedium,
          size === "small" && defaultClasses.inputSmall,
          disabled && defaultClasses.inputDisabled,
          error && defaultClasses.inputError,
          onRemoveValue && inputAdornment.endAdornment && textFieldType === "search" && defaultClasses.inputWithClear,
          classes?.textfield,
          "AruiTextfield-Textfield"
        )}
        style={styles?.label}
        variant='filled'
        error={error}
        disabled={disabled}
        helperText={error ? errorMessage : ''}
        color='primary'
        InputProps={inputProps}
        FormHelperTextProps={formHelperProps}
      />
      {rightIcon}
    </div>
  )
})
