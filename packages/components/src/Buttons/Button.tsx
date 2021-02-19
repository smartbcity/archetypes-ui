import React, { useCallback, useEffect, useState } from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress
} from '@material-ui/core'
import { BasicProps, MergeMuiElementProps } from '../Types'
import { useTheme } from '../ThemeContextProvider'
import { Check, Close, ReportProblemOutlined } from '@material-ui/icons'
import {
  containedUseStyles,
  outlinedUseStyles,
  textUseStyles
} from './buttonStyles'

export type Variant = 'contained' | 'outlined' | 'text'

export interface ButtonBasicProps extends BasicProps {
  /**
   * The class added to the root element of the component
   */
  className: string
  /**
   * The class added to the root element of the component
   */
  style?: React.CSSProperties
  /**
   * The id added to the root element of the component
   */
  id?: string
  /**
   * The event called when the button is clicked
   */
  onClick?: (event: React.ChangeEvent<{}>) => void
  /**
   * Define if the button is disabled or not
   */
  disabled?: boolean
  /**
   * The styles variations options
   */
  variant?: Variant
  /**
   * The inner components
   */
  children: React.ReactNode
  /**
   * The link to go to. Href has priority over onClick
   */
  href?: string
  /**
   * Change the button with preset style on icon to indicate an advertissement about the incoming action or the triggered one
   */
  advertissement?: boolean
  /**
   * Change the button with preset style on icon to indicate a success about the incoming action or the triggered one
   */
  success?: boolean
  /**
   * Change the button with preset style on icon to indicate a failure about the incoming action or the triggered one
   */
  fail?: boolean
  /**
   * Add the icon at the left of the children
   */
  icon?: React.ReactNode
  /**
   * Remove the icon from the component
   */
  noIcon?: boolean
  /**
   * By default if your **onClick** function is asynchronous the button will automatically make a loading icon appear and disable the button in order
   * to wait for the end of the action. But if you want to force that state you can set **isLoading** to `true`.
   */
  isLoading?: boolean
}

export type ButtonProps = MergeMuiElementProps<MuiButtonProps, ButtonBasicProps>

export const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    disabled = false,
    variant = 'contained',
    style,
    className,
    id,
    href,
    success = false,
    fail = false,
    advertissement = false,
    icon,
    noIcon,
    isLoading = false,
    ...other
  } = props
  const theme = useTheme()
  const classes =
    variant === 'contained'
      ? containedUseStyles(theme)()
      : variant === 'outlined'
      ? outlinedUseStyles(theme)()
      : textUseStyles()
  const forcedLoading = isLoading
  const [loading, setloading] = useState(false)

  useEffect(() => {
    if (success || fail) setloading(false)
  }, [success, fail])

  const onClickMemoisied = useCallback(
    async (event: React.ChangeEvent<{}>) => {
      if (!!onClick) {
        setloading(true)
        await onClick(event)
        setloading(false)
      }
    },
    [onClick]
  )

  return (
    <MuiButton
      style={style}
      disabled={loading || disabled || forcedLoading}
      className={`${classes.root} ${
        disabled && classes.disabled
      } AruiButton-root ${className} ${success ? classes.success : ''} ${
        fail ? classes.fail : ''
      } ${advertissement ? classes.advertissement : classes.defaultColor}`}
      onClick={(e) => !href && onClick && onClickMemoisied(e)}
      href={href}
      id={id}
      {...other}
    >
      {!noIcon &&
        (loading || forcedLoading ? (
          <CircularProgress
            size={variant === 'contained' ? 26 : 20}
            className={classes.buttonProgress}
          />
        ) : success ? (
          <Check className={classes.icon} />
        ) : fail ? (
          <Close className={classes.icon} />
        ) : advertissement ? (
          <ReportProblemOutlined className={classes.icon} />
        ) : icon ? (
          icon
        ) : (
          ''
        ))}
      {children}
    </MuiButton>
  )
}
