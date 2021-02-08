import React, { Fragment, useEffect, useState, useContext } from 'react'
import { makeStyles, Paper, Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import clsx from 'clsx'
import { AppBar, AppBarProps } from '../Appbar'
import { DrawerMenu, DrawerMenuProps } from '../Drawermenu'
import StyleProps from '../StyleProps'
import { MenuItem } from '../Drawermenu'
import { ToolsMenuProps, ToolsMenu } from '../ToolsMenu'
import useForceUpdate from 'use-force-update'
import { useDebouncedCallback } from 'use-debounce'
import {
  themeContext,
  Theme as SBTheme
} from '@smartb/archetypes-ui-components'

const useStyles = (customTheme: SBTheme) =>
  makeStyles<Theme, StyleProps>((theme: Theme) =>
    createStyles({
      appbar: (props) => ({
        height: `${props.appBarHeight}px`,
        backgroundColor: customTheme.primaryColor,
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
          height: `calc(100vh - ${props.appBarHeight}px)`,
          overflowX: 'hidden'
        }
      }),
      content: (props) => ({
        padding: theme.spacing(2, 2),
        height: `calc(100vh - ${props.appBarHeight}px)`,
        backgroundColor: '#fafafa',
        overflow: 'auto',
        overflowX: 'hidden'
      }),
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
        height: '100vh',
        width: '100vw',
        backgroundColor: 'black',
        top: '0',
        left: '0',
        zIndex: 5
      }
    })
  )

interface AppClasses {
  main?: string
  content?: string
}

interface AppStyles {
  main?: React.CSSProperties
  content?: React.CSSProperties
}

interface Props {
  toolsMenuProps?: ToolsMenuProps[]
  appBarProps?: Partial<AppBarProps>
  drawerMenuProps?: Partial<DrawerMenuProps>
  navBarContent?: React.ReactNode
  menu?: MenuItem[]
  children?: React.ReactNode
  logo: string
  open: boolean
  title?: string
  styleProps: StyleProps
  showAppBar?: boolean
  drawerContent?: React.ReactNode
  onToggle: () => void
  classes?: AppClasses
  styles?: AppStyles
}

const defaultProps = {
  showAppBar: true
}

export const App = (props: Props) => {
  const {
    children,
    toolsMenuProps = [],
    appBarProps,
    drawerMenuProps,
    navBarContent,
    drawerContent,
    menu,
    open,
    title,
    logo,
    styleProps,
    showAppBar = true,
    classes,
    styles,
    onToggle
  } = props
  const theme = useContext(themeContext)
  const defaultClasses = useStyles(theme)(styleProps)
  const openClasses = clsx(defaultClasses.main, {
    [defaultClasses.mainMargin]: open,
    [defaultClasses.mainShift]: !open
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
          <AppBar
            className={defaultClasses.appbar}
            logo={logo}
            onDrawerOpen={onToggle}
            title={title}
            profiles={
              window.innerWidth > 400 &&
              toolsMenuProps.map((toolsMenuProps, index) => (
                <ToolsMenu key={index} {...toolsMenuProps} />
              ))
            }
            content={window.innerWidth > 600 && navBarContent}
            {...appBarProps}
          />
          <DrawerMenu
            open={open}
            className={defaultClasses.drawer}
            menu={menu}
            styleProps={styleProps}
            toolsMenuProps={
              window.innerWidth <= 400 ? toolsMenuProps : undefined
            }
            navBarContent={window.innerWidth <= 600 && navBarContent}
            {...drawerMenuProps}
          >
            {drawerContent}
          </DrawerMenu>
        </Fragment>
      )}
      <main
        className={clsx(openClasses, 'AruiApp-main', classes?.main)}
        style={styles?.main}
      >
        <div
          className={defaultClasses.hidder}
          style={{
            display: window.innerWidth < 768 && open ? 'block' : 'none'
          }}
          onClick={onToggle}
        />
        <Paper
          square
          className={clsx(
            defaultClasses.content,
            'AruiApp-content',
            classes?.content
          )}
          style={styles?.content}
          elevation={0}
        >
          {children}
        </Paper>
      </main>
    </React.Fragment>
  )
}

App.defaultProps = defaultProps
