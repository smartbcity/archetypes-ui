import React, { useContext } from 'react'

import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core'
import { RadioButtonUnchecked, CheckCircle } from '@material-ui/icons'
import { themeContext, Theme } from '../ThemeContextProvider'
import { BasicProps } from '../Types'

const useStyles = (theme: Theme) =>
  makeStyles(() => ({
    root: {
      borderRadius: 20
    },
    container: {
      '& .MuiTypography-root': {
        fontSize: '14px'
      },
      '& .MuiButtonBase-root:hover': {
        background: 'transparent'
      }
    },
    icon: {
      color: theme.primaryColor
    },
    iconSize: {
      width: '22px',
      height: '22px'
    }
  }))

interface CheckBoxProps extends BasicProps {
  checked: boolean
  text?: string
  disabled?: boolean
  onChange?: () => void
  value?: string
}

export const CheckBox = (props: CheckBoxProps) => {
  const {
    checked = false,
    text = '',
    disabled = false,
    onChange = () => {},
    value = '',
    className,
    id,
    style
  } = props
  const theme = useContext(themeContext)
  const classes = useStyles(theme)()

  return (
    <FormControlLabel
      value={value}
      className={`${classes.container} ${className}`}
      style={style}
      id={id}
      control={
        <Checkbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className={classes.root}
          disableRipple
          icon={<RadioButtonUnchecked className={classes.iconSize} />}
          checkedIcon={
            <CheckCircle className={`${classes.icon} ${classes.iconSize}`} />
          }
        />
      }
      label={text}
      labelPlacement='end'
    />
  )
}
