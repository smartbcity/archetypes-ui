import React, { useContext } from 'react'
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  themeContext,
  Theme
} from '../ThemeContextProvider/ThemeContextProvider'
import { BasicProps, MergeMuiElementProps } from '../Types'

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

interface ButtonProps extends BasicProps {
  label: string
  onClick: (event: React.ChangeEvent<{}>) => void
  disabled?: boolean
  variant?: Variant
}

type Props = MergeMuiElementProps<MuiButtonProps, ButtonProps>

export const Button = (props: Props) => {
  const theme = useContext(themeContext)
  const classes = useStyles(theme)()
  const {
    label,
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
      className={`${variantClass} AruiButton-root ${className}`}
      onClick={(e) => onClick(e)}
      id={id}
      {...other}
    >
      {label}
    </MuiButton>
  )
}
