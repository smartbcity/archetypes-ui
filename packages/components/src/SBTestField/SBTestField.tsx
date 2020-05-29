import React from 'react'
import { InputLabel, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface Props {
  defaultValue: string
  label: string
  onChange: (value: string) => void
  isValid?: boolean
  errorMessage?: string
  type?: string
  disabled?: boolean
}

const useStyles = makeStyles(() => ({
  formcontrol: {
    width: '100%',
    borderRadius: '21.6px',
    boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.09)',
    backgroundColor: '#ffffff',
    fontSize: '14px',
    color: '#535353',
    padding: '7px 13px',
    marginBottom: '8px',
    minHeight: '40px',
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

export const SBTestField = ({
  defaultValue,
  label,
  onChange,
  isValid = true,
  errorMessage,
  type = 'text',
  disabled = false
}: Props) => {
  const classes = useStyles()

  return (
    <div>
      <InputLabel className={classes.label}>{label}</InputLabel>
      <TextField
        required
        className={classes.formcontrol}
        fullWidth
        value={defaultValue}
        margin='none'
        type={type}
        onChange={(it) => onChange(it.target.value)}
        error={!isValid}
        helperText={!isValid && errorMessage}
        FormHelperTextProps={{ classes: { root: classes.helperText } }}
        disabled={disabled}
      />
    </div>
  )
}
