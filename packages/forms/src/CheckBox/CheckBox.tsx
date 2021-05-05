import React, { ChangeEvent } from 'react'

import { Checkbox, FormControlLabel, CheckboxProps } from '@material-ui/core'
import { BasicProps, lowLevelStyles, MergeMuiElementProps, Theme, useTheme } from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'
import { CheckIcon, UnCheckIcon } from '../assets/icons'

const useStyles = lowLevelStyles<Theme>()({
  root: {
    borderRadius: 20,
    padding: '5px 10px'
  },
  container: {
    marginLeft: '0px',
    marginRight: '0px',
    '& .MuiTypography-root': {
      fontSize: '14px'
    },
    '& .MuiButtonBase-root:hover': {
      background: 'transparent'
    },
    "& .AruiCheckBox-unCheckIcon": {
      stroke: "#C5C7D0",
      fill: "none",
    },
    "&:hover .AruiCheckBox-unCheckIcon": {
      stroke: "#323338",
    },
    "& .AruiCheckBox-checkIcon rect": {
      fill: (theme: Theme) => theme.primaryColor + "B3"
    },
    "&:hover .AruiCheckBox-checkIcon rect": {
      fill: (theme: Theme) => theme.primaryColor
    },
    "& .AruiCheckBox-checkIcon path": {
      fill: "white"
    }
  },
  containerDisabled: {
    '& .MuiFormControlLabel-label.Mui-disabled': {
      color: "unset",
      opacity: 0.7
    },
    "& .AruiCheckBox-unCheckIcon": {
      fill: "#E6E9EF",
      stroke: "#E6E9EF",
    },
    "&:hover .AruiCheckBox-unCheckIcon": {
      fill: "#E6E9EF",
      stroke: "#E6E9EF",
    },
    "& .AruiCheckBox-checkIcon rect": {
      fill: () => "#E6E9EF"
    },
    "&:hover .AruiCheckBox-checkIcon rect": {
      fill: () => "#E6E9EF"
    },
    "& .AruiCheckBox-checkIcon path": {
      fill: "#676879"
    }
  },
  iconSize: {
    width: '20px',
    height: '20px',
  }
})

export interface CheckBoxClasses {
  checkbox?: string
  checkIcon?: string
  unCheckIcon?: string
}

export interface CheckBoxStyles {
  checkbox?: React.CSSProperties
  checkIcon?: React.CSSProperties
  unCheckIcon?: React.CSSProperties
}

export interface CheckBoxBasicProps extends BasicProps {
  /**
   * If true, the component is checked
   */
  checked?: boolean

  /**
   * The label displayed at the right of the checkbox
   */
  label?: string

  /**
   * If true, the checkbox will be disabled
   */
  disabled?: boolean

  /**
   * Callback fired when the state is changed
   */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /**
   * The classes applied to the different part of the component
   */
  classes?: CheckBoxClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: CheckBoxStyles
}

export type CheckBoxProps = MergeMuiElementProps<CheckboxProps, CheckBoxBasicProps>

export const CheckBox = (props: CheckBoxProps) => {
  const {
    checked = false,
    label = '',
    disabled = false,
    onChange,
    className,
    style,
    id,
    classes,
    styles,
    ...other
  } = props
  const theme = useTheme()
  const defaultClasses = useStyles(theme)

  return (
    <FormControlLabel
      className={clsx(defaultClasses.container, className, disabled && defaultClasses.containerDisabled, "AruiCheckBox-root")}
      style={style}
      id={id}
      control={
        <Checkbox
          {...other}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className={clsx(defaultClasses.root, classes?.checkbox, "AruiCheckBox-checkbox")}
          style={styles?.checkbox}
          disableRipple
          icon={
            <UnCheckIcon
              className={clsx(classes?.checkIcon, defaultClasses.iconSize, "AruiCheckBox-unCheckIcon")}
              style={styles?.checkIcon}
            />
          }
          checkedIcon={
            <CheckIcon
              className={clsx(defaultClasses.iconSize, classes?.unCheckIcon, "AruiCheckBox-checkIcon")}
              style={styles?.unCheckIcon}
            />
          }
        />
      }
      label={label}
      labelPlacement='end'
    />
  )
}
