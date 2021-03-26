import React, { ChangeEvent } from 'react'

import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import { BasicProps, Theme, useTheme } from '@smartb/archetypes-ui-themes'

const useStyles = (theme: Theme) =>
  makeStyles(() => ({
    root: {
      borderRadius: 20
    },
    container: {
      marginLeft: '0px',
      marginRight: '0px',
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

export interface CheckBoxProps extends BasicProps {
  /**
   * If true, the component is checked
   */
  checked: boolean

  /**
   * The content that will be displayed
   */
  text?: string

  /**
   * If true, the checkbox will be disabled
   */
  disabled?: boolean

  /**
   * Callback fired when the state is changed
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void

  /**
   * The value of the component
   */
  value?: string

  /**
   * ClassName for the unchecked icon
   */
  uncheckedIconClassName?: string

  /**
   * ClassName for the checked icon
   */
  checkedIconClassName?: string

  /**
   * Style for the checked icon
   */
  checkedIconStyle?: React.CSSProperties
}

export const CheckBox = (props: CheckBoxProps) => {
  const {
    checked = false,
    text = '',
    disabled = false,
    onChange,
    value = '',
    className,
    style,
    uncheckedIconClassName,
    checkedIconClassName,
    checkedIconStyle
  } = props
  const theme = useTheme()
  const classes = useStyles(theme)()

  return (
    <FormControlLabel
      value={value}
      className={`${classes.container} ${className}`}
      style={style}
      control={
        <Checkbox
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className={`${classes.root}`}
          style={{ cursor: !onChange ? 'initial' : '' }}
          disableRipple
          icon={
            <CheckBoxOutlineBlankIcon
              className={`${uncheckedIconClassName} ${classes.iconSize}`}
            />
          }
          checkedIcon={
            <CheckBoxIcon
              className={`${classes.icon} ${classes.iconSize} ${checkedIconClassName}`}
              style={checkedIconStyle}
            />
          }
        />
      }
      label={text}
      labelPlacement='end'
    />
  )
}
