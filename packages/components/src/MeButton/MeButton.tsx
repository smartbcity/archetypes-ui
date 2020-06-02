import React, { useContext } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  themeContext,
  Theme
} from '../ThemeContextProvider/ThemeContextProvider'

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
    }
  }))

export type Variant = 'contained' | 'outlined'

interface MeButtonProps {
  label: string
  onClick: (event: React.ChangeEvent<{}>) => void
  disabled?: boolean
  variant?: Variant
  style?: React.CSSProperties
  className?: string
}

export const MeButton = (props: MeButtonProps) => {
  const theme = useContext(themeContext)
  const classes = useStyles(theme)()
  const {
    label,
    onClick,
    disabled = false,
    variant = 'contained',
    style,
    className
  } = props
  const variantClass =
    variant === 'contained' ? classes.contained : classes.outlined
  return (
    <Button
      style={style}
      disabled={disabled}
      className={`${variantClass} ${className}`}
      onClick={(e) => onClick(e)}
    >
      {label}
    </Button>
  )
}
