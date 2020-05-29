import React, { useContext } from 'react'
import { Typography, Box } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { logoType } from '../Panel'
import { Box as SBBox } from '../Box'
import {
  Theme,
  themeContext
} from '../ThemeContextProvider/ThemeContextProvider'

const useStyles = (theme: Theme) =>
  makeStyles(() =>
    createStyles({
      headerContainer: {
        width: 'calc(90% - 10px)',
        padding: '10px',
        paddingLeft: '10%',
        position: 'relative'
      },
      dividerBAr: {
        background: theme.primaryColor,
        height: '2px',
        width: '30%',
        position: 'absolute',
        bottom: '0px',
        left: '10%'
      },
      bodyContainer: {
        minHeight: '50px',
        width: 'calc(100% - 30px)',
        padding: '15px'
      },
      withLogo: {
        paddingBottom: '30px',
        paddingRight: '30px',
        width: 'calc(100% - 45px)'
      },
      withSmallLogo: {
        paddingBottom: '20px',
        paddingRight: '20px',
        width: 'calc(100% - 35px)'
      },
      withFooter: {
        paddingBottom: '15px',
        paddingRight: '15px',
        width: 'calc(100% - 30px)'
      },
      text: {
        paddingBottom: '10px',
        paddingLeft: '10%',
        paddingRight: '35px'
      }
    })
  )

export type LogoSize = 'medium' | 'small'

export interface CardProps {
  header?: string
  children: React.ReactNode
  logo?: logoType | 'none'
  className?: string
  style?: React.CSSProperties
  elevation?: number
  customLogo?: React.ReactNode
  logoSize?: LogoSize
  separator?: React.ReactNode | 'none'
  footer?: string
}

export const Card = (props: CardProps) => {
  const {
    header,
    children,
    logo = 'default',
    className,
    style,
    elevation = 1,
    customLogo,
    logoSize = 'medium',
    separator,
    footer
  } = props
  const theme = useContext(themeContext)
  const classes = useStyles(theme)()

  return (
    <SBBox
      className={className}
      style={style}
      elevation={elevation}
      customLogo={customLogo}
      logoSize={logoSize}
      logo={logo}
    >
      {!!header && (
        <Box className={classes.headerContainer}>
          <Typography variant='h6' align='left'>
            {header}
          </Typography>
          {!!separator ? (
            separator !== 'none' && separator
          ) : (
            <div className={classes.dividerBAr}></div>
          )}
        </Box>
      )}
      <Box
        className={`${classes.bodyContainer} ${
          logo !== 'none' && classes.withLogo
        } ${logoSize === 'small' && logo !== 'none' && classes.withSmallLogo} ${
          !!footer && classes.withFooter
        }`}
      >
        {children}
      </Box>
      {footer && (
        <Typography className={classes.text} variant='body1' align='left'>
          {footer}
        </Typography>
      )}
    </SBBox>
  )
}
