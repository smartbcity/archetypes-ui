import React from 'react'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect
} from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { SelectIcon } from '../assets/icons'
import { useInputStylesSimple } from '../style'
import { BasicProps } from '@smartb/archetypes-ui-themes'

export type Option = {
  value: string | number
  label: string | number
}

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiFilledInput-input': {
      margin: '0px 5px'
    },
    '& .MuiSelect-root': {
      backgroundColor: 'white',
      height: 48,
      borderRadius: '5px'
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
  }
}))

export interface SelectProps extends BasicProps {
  /**
   * The value displayed
   */
  value?: string | number

  /**
   * The event called when the value of the input change
   * @param value the new value
   */
  onChange: (value: string) => void

  /**
   * The label of the input
   */
  label?: string

  /**
   * List of options available in the option
   */
  options: Option[]

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
   * The classes applied to the base part of the component
   */
  baseClassName?: string

  /**
   * The event called when the value of the input is removed
   */
  onRemoveValue?: () => void

  /**
   * If true the autocomplete will be disabled
   */
  disabled?: boolean

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

export const Select = React.forwardRef((props: SelectProps, ref) => {
  const {
    value = '',
    onChange,
    label = '',
    options,
    className,
    placeHolder,
    baseClassName = '',
    style,
    id,
    error = false,
    errorMessage = '',
    onRemoveValue,
    disabled = false,
    onClick,
    onBlur
  } = props

  const classes = useInputStylesSimple(disabled)()
  const classesLocal = useStyles()

  return (
    <FormControl
      variant='filled'
      className={`${className} ${classes.input}`}
      style={style}
      error={error}
    >
      {label ? (
        <InputLabel htmlFor={id} className={classes.label}>
          {label}
        </InputLabel>
      ) : null}
      <MuiSelect
        ref={ref}
        onClick={onClick}
        onBlur={onBlur}
        className={`${classesLocal.root} ${
          value === '' && placeHolder ? classesLocal.disabledStyle : ''
        } ${baseClassName}`}
        id={id}
        variant={'filled'}
        native
        value={value}
        IconComponent={(props) => (
          <SelectIcon
            {...props}
            color='#98A5AE'
            style={{
              width: '20px',
              height: '20px',
              right: '10px',
              top: 'calc(50% - 10px)'
            }}
          />
        )}
        onChange={(
          e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
        ) => onChange(e.target.value as string)}
        inputProps={{
          name: label,
          style: {
            paddingRight: value !== '' && onRemoveValue ? '49px' : '26px',
            textOverflow: 'ellipsis'
          }
        }}
        style={{
          color: '#98A5AE',
          fontWeight: 500
        }}
        disabled={disabled ? disabled : false}
      >
        {value === '' && placeHolder ? (
          <option aria-label='Placeholder' value='' disabled>
            {placeHolder}
          </option>
        ) : (
          value === '' && !placeHolder && <option aria-label='None' value='' />
        )}
        {options.map((option, index) => (
          <option value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </MuiSelect>
      {value !== '' && onRemoveValue && (
        <Clear onClick={onRemoveValue} className={classesLocal.clear} />
      )}
      {errorMessage !== '' && error && (
        <FormHelperText className={classes.helperText}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  )
})
