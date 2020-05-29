import React from 'react'
import { InputLabel, MenuItem, Select } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      margin: '8px 16px'
    },
    formControl: {
      width: '100%',
      borderRadius: '21.6px',
      boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.09)',
      backgroundColor: '#ffffff',
      fontSize: '14px',
      color: '#535353',
      padding: '0 13px',
      marginBottom: '8px',
      minHeight: '40px',
      '&::before': {
        content: 'none'
      }
    }
  })
)

export interface SBSelectItem {
  value: string
  label: string
}

interface SBSelectProps {
  id: string
  label: string
  value?: string
  items: SBSelectItem[]
  disabled?: boolean
  onChange?: (
    event: React.ChangeEvent<{ name?: string; value: unknown }>,
    child: React.ReactNode
  ) => void
}

export const SBSelect = (props: SBSelectProps) => {
  const { id, label, items, value, onChange, disabled = false } = props
  const classes = useStyles()
  return (
    <div>
      <InputLabel htmlFor={id} className={classes.title}>
        {label}
      </InputLabel>
      <Select
        className={classes.formControl}
        value={value}
        onChange={onChange}
        disabled={disabled}
        inputProps={{
          id: id
        }}
      >
        {items.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}
