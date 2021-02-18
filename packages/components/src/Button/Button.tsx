import React from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { BasicProps, MergeMuiElementProps } from '../Types'
import { Theme, useTheme } from '../ThemeContextProvider'

const useStyles = (theme: Theme) =>
  makeStyles(() => ({
    outlined: {
      minWidth: '136px',
      padding: '7px',
      fontSize: '0.75rem',
      color: theme.secondaryColor,
      backgroundColor: '#ffffff',
      borderRadius: '11px',
      boxShadow: theme.shadows[2],
      border: 'solid 1.1px ' + theme.secondaryColor,
      '&:hover': {
        backgroundColor: theme.secondaryColor,
        color: '#ffffff'
      }
    },
    contained: {
      minWidth: '136px',
      padding: '7px 0',
      fontSize: '0.75rem',
      borderRadius: '11px',
      boxShadow: theme.shadows[2],
      border: 'solid 1.1px ' + theme.secondaryColor,
      backgroundImage:
        'linear-gradient(226deg, ' +
        theme.secondaryColor +
        ' 181%, #6a9d36 -96%)',
      color: '#ffffff'
    },
    disabled: {
      opacity: '0.7'
    }
  }))

export type Variant = 'contained' | 'outlined'

export interface ButtonProps extends BasicProps {
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
  onClick: (event: React.ChangeEvent<{}>) => void
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
}

export type Props = MergeMuiElementProps<MuiButtonProps, ButtonProps>

export const Button = (props: Props) => {
  const theme = useTheme()
  const classes = useStyles(theme)()
  const {
    children,
    onClick,
    disabled = false,
    variant = 'contained',
    style,
    className,
    id,
    ...other
  } = props
  const variantClass =
    variant === 'contained' ? classes.contained : classes.outlined
  return (
    <MuiButton
      style={style}
      disabled={disabled}
      className={`${variantClass} ${
        disabled && classes.disabled
      } AruiButton-root ${className}`}
      onClick={(e) => onClick(e)}
      id={id}
      {...other}
    >
      {children}
    </MuiButton>
  )
}
