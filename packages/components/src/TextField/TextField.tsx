import React from 'react'
import {
  InputLabel,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  makeStyles
} from '@material-ui/core'

import { BasicProps, MergeMuiElementProps } from '../Types'

export interface TextFieldProps extends BasicProps {
  defaultValue: string
  label: string
  onChange: (value: string) => void
  isValid?: boolean
  errorMessage?: string
  type?: string
  disabled?: boolean
}

const useStyles = makeStyles(() => ({
  formControl: {
    width: '100%',
    borderRadius: '21.6px',
    boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.09)',
    backgroundColor: '#ffffff',
    fontSize: '14px',
    color: '#535353',
    padding: '7px 13px',
    marginBottom: '8px',
    minHeight: '20px',
    '&::before': {
      content: 'none'
    }
  },
  label: {
    margin: '8px 16px'
  },
  helperText: {
    marginLeft: '3px'
  }
}))

type Props = MergeMuiElementProps<MuiTextFieldProps, TextFieldProps>

export const TextField = (props: Props) => {
  const {
    defaultValue,
    label,
    onChange,
    isValid = true,
    errorMessage,
    type = 'text',
    disabled = false,
    id,
    style,
    className,
    ...other
  } = props
  const classes = useStyles()

  // https://github.com/mui-org/material-ui/issues/20716
  const fixedTextFieldProps: Partial<MuiTextFieldProps> = {
    ...other,
    variant: 'standard'
  }
  return (
    <div>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <MuiTextField
        required
        className={`${className} ${classes.formControl}`}
        fullWidth
        value={defaultValue}
        margin='none'
        type={type}
        onChange={(it) => onChange(it.target.value)}
        error={!isValid}
        helperText={!isValid && errorMessage}
        FormHelperTextProps={{ classes: { root: classes.helperText } }}
        disabled={disabled}
        InputProps={{ disableUnderline: true }}
        id={id}
        style={style}
        {...fixedTextFieldProps}
      />
    </div>
  )
}
