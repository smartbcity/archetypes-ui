import React, { useContext } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {
  Theme,
  themeContext
} from '../ThemeContextProvider/ThemeContextProvider'

const useStyles = (theme: Theme) =>
  makeStyles(() =>
    createStyles({
      button: {
        backgroundColor: theme.secondaryColor,
        padding: '10px 30px',
        clipPath:
          'polygon(7% 0, 100% 0, 100% 20%, 100% 80%, 93% 100%, 0 100%, 0 80%, 0 20%)',
        WebkitClipPath:
          'polygon(7% 0, 100% 0, 100% 20%, 100% 80%, 93% 100%, 0 100%, 0 80%, 0 20%)',
        border: 'none',
        cursor: 'pointer',
        transition: '0.2s',
        borderRadius: '1px',
        fontSize: '1rem',
        '&:focus': {
          outline: 'none'
        }
      },
      hover: {
        '&:hover': {
          clipPath:
            'polygon(0 0, 93% 0, 100% 20%, 100% 80%, 100% 100%, 7% 100%, 0 80%, 0 20%)',
          WebkitClipPath:
            'polygon(0 0, 93% 0, 100% 20%, 100% 80%, 100% 100%, 7% 100%, 0 80%, 0 20%)'
        }
      },
      disabled: {
        opacity: '0.8',
        cursor: 'default'
      }
    })
  )

export interface SBButtonProps {
  children?: React.ReactNode
  onClick?: (event: React.ChangeEvent<{}>) => void
  disabled?: boolean
  hoverEffect?: boolean
  className?: string
  style?: React.CSSProperties
}

export const SBButton = (props: SBButtonProps) => {
  const {
    children,
    onClick,
    disabled = false,
    className,
    style,
    hoverEffect = true
  } = props
  const theme = useContext(themeContext)
  const classes = useStyles(theme)()
  return (
    <button
      disabled={disabled}
      style={style}
      className={`${classes.button} ${!!className && className} ${
        hoverEffect && !disabled && classes.hover
      } ${disabled && classes.disabled}`}
      onClick={!disabled ? onClick : () => {}}
    >
      {children}
    </button>
  )
}
