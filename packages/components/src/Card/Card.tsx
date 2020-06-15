import React, { useContext } from 'react'
import { Typography, Box } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { logoType } from '../Panel'
import { Box as AruiBox } from '../Box'
import {
  Theme,
  themeContext
} from '../ThemeContextProvider/ThemeContextProvider'
import { BasicProps } from '../Types'
import clsx from 'clsx'

const useStyles = (theme: Theme) =>
  makeStyles(() =>
    createStyles({
      headerContainer: {
        width: 'calc(90% - 10px)',
        padding: '10px',
        paddingLeft: '10%',
        position: 'relative'
      },
      dividerBar: {
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

interface CardClasses {
  header?: string
  body?: string
  dividerBar?: string
  footer?: string
}

interface CardStyles {
  header?: React.CSSProperties
  body?: React.CSSProperties
  dividerBar?: React.CSSProperties
  footer?: React.CSSProperties
}

export type LogoSize = 'medium' | 'small'

export interface CardProps extends BasicProps {
  header?: string
  children: React.ReactNode
  logo?: logoType | 'none'
  elevation?: number
  customLogo?: React.ReactNode
  logoSize?: LogoSize
  separator?: React.ReactNode | 'none'
  footer?: string
  classes?: CardClasses
  styles?: CardStyles
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
    footer,
    id,
    classes,
    styles
  } = props
  const theme = useContext(themeContext)
  const defaultClasses = useStyles(theme)()

  return (
    <AruiBox
      className={clsx('AruiCard-root', className)}
      style={style}
      id={id}
      elevation={elevation}
      customLogo={customLogo}
      logoSize={logoSize}
      logo={logo}
    >
      {!!header && (
        <Box
          className={clsx(
            defaultClasses.headerContainer,
            'AruiCard-header',
            classes?.header
          )}
          style={styles?.header}
        >
          <Typography variant='h6' align='left'>
            {header}
          </Typography>
          {!!separator ? (
            separator !== 'none' && separator
          ) : (
            <div
              className={clsx(
                defaultClasses.dividerBar,
                'AruiCard-dividerBar',
                classes?.dividerBar
              )}
              style={styles?.dividerBar}
            ></div>
          )}
        </Box>
      )}
      <Box
        className={clsx(
          defaultClasses.bodyContainer,
          {
            [defaultClasses.withLogo]: logo !== 'none',
            [defaultClasses.withSmallLogo]:
              logoSize === 'small' && logo !== 'none',
            [defaultClasses.withFooter]: !!footer
          },
          'AruiCard-body',
          classes?.body
        )}
        style={styles?.body}
      >
        {children}
      </Box>
      {footer && (
        <Typography
          className={clsx(
            defaultClasses.text,
            'AruiCard-footer',
            classes?.footer
          )}
          style={styles?.footer}
          variant='body1'
          align='left'
        >
          {footer}
        </Typography>
      )}
    </AruiBox>
  )
}
