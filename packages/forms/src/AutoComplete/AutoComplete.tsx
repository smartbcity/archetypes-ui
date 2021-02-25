import { TextField, Chip, FormControl, makeStyles } from '@material-ui/core'
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab'
import React from 'react'
import { useTheme } from '@smartb/archetypes-ui-components'
import { useInputStyles } from '../style'

const useStyles = makeStyles(() => ({
  padding: {
    '& .MuiAutocomplete-inputRoot': {
      paddingTop: 0,
      paddingRight: '27px !important'
    },
    '& .MuiChip-root': {
      backgroundColor: '#EBEBEC !important',
      borderRadius: '5px !important',
      border: 'none'
    }
  }
}))

export interface AutoCompleteProps<T> {
  /**
   * The id of the root component
   */
  id: string
  /**
   * The className of the root component
   */
  className?: string
  /**
   * The style of the root component
   */
  style?: React.CSSProperties
  /**
   * If true, the menu will support multiple selections.
   */
  multiple?: boolean
  /**
   * List of option available in the option
   */
  options: T[]
  /**
   * The event called when selected element change.
   * @param value the new selected elements
   */
  onChangeSelectedElement: (value: T | T[]) => void
  /**
   * The label of the field.
   */
  label: string
  /**
   * The default element value.
   */
  defaultValue?: T | T[]
  /**
   * The event called when search value change.
   * @param value
   */
  onSearch: (value: string) => void
  /**
   * Message displayed when select has no options
   */
  noOptionsText: string
  /**
   * CLass name for text field
   */
  textFieldClassName?: string
  /**
   * this props name need to be changed
   * @param option
   */
  getOptionLabel: (option: T) => string
  /**
   * If true the autocomplete will be disabled
   */
  readonly?: boolean
  /**
   * Display autocomplete with error fields
   */
  error?: boolean
  /**
   * Error message to display
   */
  errorMessage?: string
  /**
   * Place Holder Message
   */
  placeholder?: string
}

export function AutoComplete<T>(props: AutoCompleteProps<T>) {
  const {
    className,
    style,
    multiple = false,
    id,
    options,
    onChangeSelectedElement,
    label,
    defaultValue = null,
    onSearch,
    noOptionsText,
    textFieldClassName,
    getOptionLabel,
    readonly = false,
    error = false,
    errorMessage = '',
    placeholder
  } = props

  const theme = useTheme()
  const classes = useInputStyles(theme, readonly)()
  const classesLocal = useStyles()

  return (
    <FormControl variant='filled' style={style}>
      {label ? <div className={classes.label}>{label}</div> : null}
      <MuiAutocomplete
        id={id}
        filterSelectedOptions
        multiple={multiple}
        options={options}
        className={className}
        value={defaultValue}
        defaultValue={defaultValue}
        forcePopupIcon={false}
        getOptionLabel={getOptionLabel}
        style={{ ...style }}
        disabled={readonly !== undefined ? readonly : false}
        noOptionsText={noOptionsText}
        onChange={(_, newValue) => {
          onChangeSelectedElement(newValue || [])
        }}
        renderTags={(value: T[], getTagProps) =>
          value.map((option: T, index: number) => (
            <Chip label={getOptionLabel(option)} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            error={error}
            style={{
              marginTop: '-3px !important',
              height: 'auto'
            }}
            placeholder={placeholder ? placeholder : ''}
            helperText={error ? errorMessage : ''}
            {...params}
            variant={'filled'}
            className={`${classesLocal.padding} ${textFieldClassName} ${classes.input}`}
            onChange={(value) => {
              onSearch(value.target.value)
            }}
          />
        )}
      />
    </FormControl>
  )
}
