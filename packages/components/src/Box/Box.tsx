import React, { useContext } from 'react'
import { Paper } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import defaultLogo from '../assets/impactcity-logo-2.png'
import documentLogo from '../assets/docstampt-badge.png'
import { logoType } from '../Panel'
import { themeContext } from '../ThemeContextProvider/ThemeContextProvider'
import { BasicProps } from '../Types'
import clsx from 'clsx'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      borderRadius: '5px',
      position: 'relative',
      margin: '20px',
      marginBottom: '40px',
      marginRight: '40px'
    },
    logo: {
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      position: 'absolute',
      bottom: '-25.5px',
      right: '-26px'
    },
    logoSmall: {
      width: '40px',
      height: '40px',
      bottom: '-5.5px',
      right: '-6px'
    },
    hidder: {
      borderRadius: '50%',
      background: 'white',
      width: '80px',
      height: '80px',
      position: 'absolute',
      bottom: '-30px',
      right: '-30px',
      clipPath: 'polygon(0 0, 63% 0, 63% 63%, 0 63%)',
      WebkitClipPath: 'polygon(0 0, 63% 0, 63% 63%, 0 63%)'
    },
    HidderSmall: {
      bottom: '-10px',
      right: '-10px',
      width: '50px',
      height: '50px',
      clipPath: 'polygon(0 0, 80% 0, 80% 80%, 0 80%)',
      WebkitClipPath: 'polygon(0 0, 80% 0, 80% 80%, 0 80%)'
    },
    documentLogoSmall: {
      width: '40px',
      height: '40px'
    },
    documentLogoMedium: {
      width: '70px',
      height: '70px'
    },
    ImpactCityLogoSmall: {
      width: '51px',
      height: '51px',
      marginTop: '-9.5px',
      marginLeft: '-0.2px'
    },
    ImpactCityLogoMedium: {
      width: '81px',
      height: '81px',
      marginTop: '-9.5px',
      marginLeft: '-0.2px'
    },
    ImpactCityLogoContainerSmall: {
      bottom: '-7px',
      right: '-6px'
    },
    ImpactCityLogoContainerMedium: {
      bottom: '-26.5px',
      right: '-26px'
    }
  })
)

export type LogoSize = 'medium' | 'small'

export interface BoxProps extends BasicProps {
  children: React.ReactNode
  logo?: logoType | 'none'
  elevation?: number
  customLogo?: React.ReactNode
  logoSize?: LogoSize
}

export const Box = (props: BoxProps) => {
  const {
    children,
    logo = 'default',
    className,
    style,
    elevation = 1,
    customLogo,
    logoSize = 'medium',
    id
  } = props
  const theme = useContext(themeContext)
  const defaultClasses = useStyles()
  return (
    <Paper
      className={clsx(defaultClasses.card, 'AruiBox-root', className)}
      style={style}
      elevation={elevation}
      id={id}
    >
      {children}
      {logo !== 'none' && (
        <div>
          <div
            className={`${defaultClasses.hidder} ${
              logoSize == 'small' && defaultClasses.HidderSmall
            }`}
            style={{ boxShadow: `${theme.shadows[elevation]} inset` }}
          ></div>
          {!!customLogo ? (
            <Paper
              className={`${defaultClasses.logo} ${
                logoSize == 'small' && defaultClasses.logoSmall
              }`}
              elevation={elevation}
            >
              {customLogo}
            </Paper>
          ) : logo === 'document' ? (
            <Paper
              className={`${defaultClasses.logo} ${
                logoSize == 'small' && defaultClasses.logoSmall
              }`}
              elevation={elevation}
            >
              <img
                src={documentLogo}
                alt='A smartb logo'
                className={
                  logoSize == 'small'
                    ? defaultClasses.documentLogoSmall
                    : defaultClasses.documentLogoMedium
                }
              />
            </Paper>
          ) : (
            <Paper
              className={`${defaultClasses.logo} ${
                logoSize == 'small' && defaultClasses.logoSmall
              } ${
                logoSize == 'small'
                  ? defaultClasses.ImpactCityLogoContainerSmall
                  : defaultClasses.ImpactCityLogoContainerMedium
              }`}
              elevation={elevation}
            >
              <img
                src={defaultLogo}
                alt='A smartb logo'
                className={
                  logoSize == 'small'
                    ? defaultClasses.ImpactCityLogoSmall
                    : defaultClasses.ImpactCityLogoMedium
                }
              />
            </Paper>
          )}
        </div>
      )}
    </Paper>
  )
}
