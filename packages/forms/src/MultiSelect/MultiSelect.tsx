import Chip from '@material-ui/core/Chip'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import InputBase from '@material-ui/core/InputBase'
import FormHelperText from '@material-ui/core/FormHelperText'
import { MenuProps } from '@material-ui/core'
import {Option} from "../Select";
import {useInputStylesSimple} from "../style";
import {BasicProps} from "@smartb/archetypes-ui-components";

const useStyles = makeStyles(() => ({
  helperText: {
    position: 'relative',
    marginTop: '10px'
  },

  chips: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    height: '100%'
  },
  chip: {
    margin: 8,
    background: '#F2F4F5',
    borderRadius: '5px',
    color: '#353945'
  },
  input: {
    minHeight: '50px',
    padding: 0,
    background: 'white !important',
    borderRadius: '5px'
  }
}))

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuPropsP: Partial<MenuProps> = {
  PaperProps: {
    style: {
      marginTop: 70,
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

export interface MultiSelectProps extends BasicProps {

  /**
   * The value displayed
   */
  values?: string[]

  /**
   * The event called when the value of the input change
   * @param value the new value
   */
  onChange: (value: string[]) => void

  /**
   * The text to display as place holder
   */
  placeHolder?: string

  /**
   * List of options available in the option
   */
  options: Option[]

  /**
   * Define if the value of the input is valid or not
   */
  error?: boolean

  /**
   * The message displayed when the input value is wrong
   */
  errorMessage?: string

  /**
   * The min height
   */
  minHeight?: string

  /**
   * If true, the checkbox will be disabled
   */
  disabled?: boolean
}

const findOptionLabel = (options: Option[], value: string): string | number => {
  return options.find((option) => option.value === value)?.label ?? ''
}

export const MultiSelect = (props: MultiSelectProps) => {
  const {
    values = [],
    onChange,
    placeHolder = '',
    options,
    className,
    style,
    id,
    error = false,
    errorMessage = '',
    minHeight,
    disabled = false
  } = props
  const classesLocal = useStyles()
  const classes = useInputStylesSimple(disabled)()
  return (
    <FormControl
      variant='filled'
      style={style}
      error={error}
      className={`${className}  ${classes.input}`}
    >
      {placeHolder !== '' && (
        <InputLabel htmlFor={id}>{placeHolder}</InputLabel>
      )}
      <Select
        id={`mutiple-chip-${id}`}
        variant='filled'
        multiple
        value={values}
        onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
          onChange(event.target.value as string[])
        }}
        disabled={disabled ? disabled : false}
        input={
          <InputBase
            error={error}
            classes={{
              input: `${classesLocal.input} ${minHeight} `
            }}
          />
        }
        renderValue={(selected: string[]) => {
          return (
            <div className={classesLocal.chips}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={findOptionLabel(options, value)}
                  className={classesLocal.chip}
                />
              ))}
            </div>
          )
        }}
        MenuProps={MenuPropsP}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {errorMessage !== '' && error && (
        <FormHelperText className={classes.helperText}>
          {errorMessage}
        </FormHelperText>
      )}
    </FormControl>
  )
}
