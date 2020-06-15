import React from 'react'
import {
  InputLabel,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
  makeStyles
} from '@material-ui/core'

import { BasicProps, MergeMuiElementProps } from '../Types'
import clsx from 'clsx'

interface TextFieldClasses {
  label?: string
  input?: string
}

interface TextFieldStyles {
  label?: React.CSSProperties
  input?: React.CSSProperties
}

export interface TextFieldProps extends BasicProps {
  defaultValue: string
  label: string
  onChange: (value: string) => void
  isValid?: boolean
  errorMessage?: string
  type?: string
  disabled?: boolean
  classes?: TextFieldClasses
  styles?: TextFieldStyles
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
    classes,
    styles,
    ...other
  } = props
  const defaultClasses = useStyles()

  // https://github.com/mui-org/material-ui/issues/20716
  const fixedTextFieldProps: Partial<MuiTextFieldProps> = {
    ...other,
    variant: 'standard'
  }
  return (
    <div style={style} className={clsx(className, 'AruiTextField-root')}>
      <InputLabel
        htmlFor={id}
        className={clsx(
          defaultClasses.label,
          'AruiTextField-label',
          classes?.label
        )}
      >
        {label}
      </InputLabel>
      <MuiTextField
        required
        className={clsx(
          defaultClasses.formControl,
          'AruiTextField-nput',
          classes?.input
        )}
        fullWidth
        value={defaultValue}
        margin='none'
        type={type}
        onChange={(it) => onChange(it.target.value)}
        error={!isValid}
        helperText={!isValid && errorMessage}
        FormHelperTextProps={{ classes: { root: defaultClasses.helperText } }}
        disabled={disabled}
        InputProps={{ disableUnderline: true, id: id }}
        {...fixedTextFieldProps}
      />
    </div>
  )
}
