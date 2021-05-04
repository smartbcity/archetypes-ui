import React, { useCallback, useMemo } from 'react'
import {
  FormControl,
  FormHelperText,
  InputBaseComponentProps,
  Select as MuiSelect,
  SelectProps as MuiSelectProps
} from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import { SelectIcon } from '../assets/icons'
import { useInputStyles } from '../style'
import { BasicProps, lowLevelStyles, MergeMuiElementProps, useTheme } from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'

export type Option = {
  value: string | number
  label: string | number
}

export interface SelectClasses {
  label?: string
  select?: string
  input?: string
  helperText?: string
  selectIcon?: string
  clearIcon?: string
  option?: string
}

export interface SelectStyles {
  label?: React.CSSProperties
  select?: React.CSSProperties
  input?: React.CSSProperties
  helperText?: React.CSSProperties
  selectIcon?: React.CSSProperties
  clearIcon?: React.CSSProperties
  option?: React.CSSProperties
}

const useStyles = lowLevelStyles()({
  root: {
    '& .MuiFilledInput-input': {
      margin: '0px 5px'
    }
  },
  disabledStyle: {
    '& .MuiSelect-root': {
      fontSize: '14px',
      color: 'rgba(0, 0, 0, 0.35)'
    }
  },
  clear: {
    position: 'absolute',
    right: '35px',
    top: '50%',
    marginTop: '-12px',
    cursor: 'pointer',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  selectIcon: {
    width: '20px',
    height: '20px',
    right: '10px',
    top: 'calc(50% - 10px)'
  }
})

export interface SelectBasicProps extends BasicProps {
  /**
   * The value displayed
   */
  value?: string | number

  /**
   * The event called when the value of the input change
   * @param value the new value
   */
  onChange?: (value: string) => void

  /**
   * The size of the input
   */
  size?: "large" | "medium" | "small"

  /**
   * List of options available in the option
   */
  options?: Option[]

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
   * The event called when the value of the input is removed
   */
  onRemoveValue?: () => void

  /**
   * If true the autocomplete will be disabled
   */
  disabled?: boolean
  /**
   * The classes applied to the different part of the component
   */
  classes?: SelectClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: SelectStyles
}

export type SelectProps = MergeMuiElementProps<MuiSelectProps, SelectBasicProps>

export const Select = React.forwardRef((props: SelectProps, ref) => {
  const {
    value = '',
    onChange,
    label = '',
    options = [],
    className,
    placeHolder,
    style,
    id,
    error = false,
    errorMessage = '',
    onRemoveValue,
    disabled = false,
    classes,
    styles,
    size = "medium",
    ...other
  } = props

  const theme = useTheme()
  const defaultClasses = useInputStyles(theme)
  const classesLocal = useStyles()

  const onChangeMemoized = useCallback(
    (e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) => onChange && onChange(e.target.value as string),
    [onChange],
  )

  const selectIcon = useCallback(
    (props) => (
      <SelectIcon
        {...props}
        color='#98A5AE'
        className={clsx(classes?.selectIcon, classesLocal.selectIcon, "AruiSelect-selectIcon", props.className)}
        style={styles?.selectIcon}
      />
    ),
    [],
  )

  const optionsMemoized = useMemo(() => {
    return options.map((option, index) => (
      <option className={clsx(classes?.option, "AruiSelect-option")} style={styles?.option} value={option.value} key={index}>
        {option.label}
      </option>
    ))
  }, [options, classes?.option, styles?.option])

  const inputProp: InputBaseComponentProps = useMemo(() => {
    return {
      name: label,
      className: clsx(classes?.input, "AruiSelect-select"),
      style: {
        ...styles?.input,
        paddingRight: value !== '' && onRemoveValue ? '49px' : '26px',
        textOverflow: 'ellipsis'
      }
    }
  }, [label, onRemoveValue, value, classes?.input, styles?.input])

  return (
    <FormControl
      variant='filled'
      className={clsx(
        className,
        defaultClasses.input,
        size === "large" && defaultClasses.inputLarge,
        size === "medium" && defaultClasses.inputMedium,
        size === "small" && defaultClasses.inputSmall,
        disabled && defaultClasses.inputDisabled,
        error && defaultClasses.inputError,
        "AruiSelect-root"
      )}
      style={style}
      error={error}
    >
      <MuiSelect
        {...other}
        ref={ref}
        className={clsx(classesLocal.root, value === '' && placeHolder ? classesLocal.disabledStyle : '', classes?.select, "AruiSelect-select")}
        id={id}
        variant={'filled'}
        native
        value={value}
        IconComponent={selectIcon}
        onChange={onChangeMemoized}
        inputProps={inputProp}
        style={{
          ...styles?.select,
          color: '#98A5AE',
          fontWeight: 500
        }}
        disabled={disabled ? disabled : false}
      >
        {value === '' && placeHolder ? (
          <option className={clsx(classes?.option, "AruiSelect-option")} style={styles?.option} aria-label='Placeholder' value='' disabled>
            {placeHolder}
          </option>
        ) : (
          value === '' && !placeHolder && <option className={clsx(classes?.option, "AruiSelect-option")} style={styles?.option} aria-label='None' value='' />
        )}
        {optionsMemoized}
      </MuiSelect>
      {value !== '' && onRemoveValue && (
        <Clear onClick={onRemoveValue} className={clsx(classesLocal.clear, classes?.clearIcon, "AruiSelect-clearIcon")} style={styles?.clearIcon} />
      )}
      {errorMessage !== '' && error && (
        <FormHelperText className={clsx(defaultClasses.helperText, classes?.helperText, "AruiSelect-helperText")} style={styles?.helperText}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  )
})
