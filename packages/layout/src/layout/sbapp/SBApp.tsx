import React, { Fragment, useEffect, useState } from 'react'
import { makeStyles, Paper, Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import clsx from 'clsx'
import { SBAppBar } from '../appbar/AppBar'
import { SBDrawerMenu } from '../drawermenu/Drawermenu'
import StyleProps from '../StyleProps'
import { MenuItem } from '../drawermenu/menu'
import { SBIconProfile, IconProfileProps } from '../profile'
import useForceUpdate from 'use-force-update'
import { useDebouncedCallback } from 'use-debounce'

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    appbar: (props) => ({
      height: `${props.appBarHeight}px`,
      '& .MuiToolbar-root': {
        height: '100%'
      }
    }),
    drawer: (props) => ({
      width: `${props.menuWidth}px`,
      '& .MuiDrawer-paper': {
        top: `${props.appBarHeight}px`,
        width: `${props.menuWidth}px`,
        background: 'white',
        height: `calc(100% - ${props.appBarHeight}px)`,
        overflowX: 'hidden'
      }
    }),
    content: {
      padding: theme.spacing(2, 2),
      height: '100%',
      backgroundColor: '#fafafa'
    },
    main: (props) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginTop: props.appBarHeight
    }),
    mainMargin: (props) => ({
      marginLeft: props.menuWidth
    }),
    mainShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    hidder: {
      opacity: '0.5',
      position: 'fixed',
      height: '100%',
      width: '100%',
      backgroundColor: 'black',
      top: '0',
      left: '0',
      zIndex: 5
    }
  })
)

interface Props {
  profilesProps: IconProfileProps[]
  navBarContent?: React.ReactNode
  menu?: MenuItem[]
  children?: React.ReactNode
  logo: string
  isOpen: boolean
  title?: string
  styleProps: StyleProps
  showAppBar: boolean
  drawerContent?: React.ReactNode
}

const defaultProps = {
  showAppBar: true
}

export const SBApp = ({
  children,
  profilesProps,
  navBarContent,
  drawerContent,
  menu,
  isOpen,
  title,
  logo,
  styleProps,
  showAppBar
}: Props) => {
  const classes = useStyles(styleProps)
  const [open, setOpen] = React.useState<boolean>(isOpen)
  const openClasses = clsx(classes.main, {
    [classes.mainMargin]: open,
    [classes.mainShift]: !open
  })
  const forceUpdate = useForceUpdate()
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [handleResize] = useDebouncedCallback(() => {
    const min = Math.min.apply(Math, [window.innerWidth, innerWidth])
    const max = Math.max.apply(Math, [window.innerWidth, innerWidth])
    if ((400 > min && 400 < max) || (600 > min && 600 < max)) {
      forceUpdate()
    }
    setInnerWidth(window.innerWidth)
  }, 500)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <React.Fragment>
      {showAppBar && (
        <Fragment>
          <SBAppBar
            className={classes.appbar}
            logo={logo}
            drawerOpen={open}
            onDrawerOpen={() => setOpen(!open)}
            title={title}
            profiles={
              window.innerWidth > 400 &&
              profilesProps.map((profileProps, index) => (
                <SBIconProfile key={index} {...profileProps} />
              ))
            }
            content={window.innerWidth > 600 && navBarContent}
          />
          <SBDrawerMenu
            open={open}
            className={classes.drawer}
            menu={menu}
            styleProps={styleProps}
            profilesProps={window.innerWidth <= 400 ? profilesProps : undefined}
            navBarContent={window.innerWidth <= 600 && navBarContent}
          >
            {drawerContent}
          </SBDrawerMenu>
        </Fragment>
      )}
      <main className={openClasses}>
        <div
          className={classes.hidder}
          style={{
            display: window.innerWidth < 768 && open ? 'block' : 'none'
          }}
          onClick={() => setOpen(!open)}
        />
        <Paper square className={classes.content} elevation={0}>
          {children}
        </Paper>
      </main>
    </React.Fragment>
  )
}

SBApp.defaultProps = defaultProps
