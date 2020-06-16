import React, { useContext } from 'react'
import { Card as MuiCard, CardProps } from '@material-ui/core'
import {
  CardHeader,
  Typography,
  CardContent,
  CardActions
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import defaultLogo from '../assets/impactcity-logo-2.png'
import documentLogo from '../assets/docstampt-badge.png'
import { logoType } from '.'
import {
  themeContext,
  Theme
} from '../ThemeContextProvider/ThemeContextProvider'
import { BasicProps, MergeMuiElementProps } from '../Types'
import clsx from 'clsx'

const useStyles = (theme: Theme) =>
  makeStyles(() =>
    createStyles({
      card: {
        borderRadius: '10px'
      },
      header: {
        minHeight: '100px'
      },
      headerContainer: {
        display: 'flex',
        justifyContent: 'center'
      },
      headerContent: {
        width: '70%',
        textAlign: 'center',
        display: 'block',
        zIndex: 1
      },
      content: {
        backgroundColor: theme.tertiaryColor,
        minHeight: '100px',
        position: 'relative',
        justifyContent: 'center',
        paddingTop: '40px'
      },
      footer: {
        minHeight: '50px',
        display: 'flex',
        justifyContent: 'center'
      },
      logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: 'calc(100% - 32px)',
        position: 'absolute',
        top: '-110px',
        zIndex: 0
      },
      logoBorder: {
        width: '136px',
        height: '136px',
        borderRadius: '50%',
        background: 'white'
      },
      logo: {
        height: '130px',
        width: '130px',
        position: 'relative',
        marginLeft: '12px',
        opacity: '50%'
      },
      documentLogo: {
        height: '115px',
        width: '115px',
        position: 'relative',
        marginLeft: '11.5px',
        marginTop: '12px',
        opacity: '50%'
      },
      logoWithHeader: {
        opacity: '15%'
      }
    })
  )

interface PanelClasses {
  header?: string
  content?: string
  footer?: string
}

interface PanelStyles {
  header?: React.CSSProperties
  content?: React.CSSProperties
  footer?: React.CSSProperties
}

export interface PanelProps extends BasicProps {
  header?: string
  children?: React.ReactNode
  logo?: logoType
  footer?: React.ReactNode
  customLogo?: React.ReactNode
  classes?: PanelClasses
  styles?: PanelStyles
}

type Props = MergeMuiElementProps<CardProps, PanelProps>

export const Panel = (props: Props) => {
  const {
    header,
    children,
    logo = 'default',
    className,
    footer,
    style,
    customLogo,
    id,
    classes,
    styles,
    ...other
  } = props
  const theme = useContext(themeContext)
  const defaultClasses = useStyles(theme)()
  return (
    <MuiCard
      className={clsx(defaultClasses.card, 'AruiPanel-root', className)}
      style={style}
      id={id}
      {...other}
    >
      <CardHeader
        className={clsx(
          defaultClasses.header,
          'AruiPanel-header',
          classes?.header
        )}
        style={styles?.header}
        classes={{ content: defaultClasses.headerContainer }}
        subheader={
          !!header && (
            <Typography
              className={defaultClasses.headerContent}
              variant='h6'
              color='textSecondary'
              component='p'
            >
              {header}
            </Typography>
          )
        }
      />
      <CardContent
        className={clsx(
          defaultClasses.content,
          'AruiPanel-content',
          classes?.content
        )}
        style={styles?.content}
      >
        <div className={defaultClasses.logoContainer}>
          <div className={defaultClasses.logoBorder}>
            {!!customLogo ? (
              customLogo
            ) : logo === 'document' ? (
              <img
                src={documentLogo}
                className={`${defaultClasses.documentLogo} ${
                  !!header && defaultClasses.logoWithHeader
                }`}
                alt='A smartb logo'
              />
            ) : (
              <img
                src={defaultLogo}
                className={`${defaultClasses.logo} ${
                  !!header && defaultClasses.logoWithHeader
                }`}
                alt='A smartb logo'
              />
            )}
          </div>
        </div>
        {children}
      </CardContent>
      <CardActions
        className={clsx(
          defaultClasses.footer,
          'AruiPanel-footer',
          classes?.footer
        )}
        style={styles?.footer}
      >
        {footer}
      </CardActions>
    </MuiCard>
  )
}
