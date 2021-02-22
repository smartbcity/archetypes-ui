import React, { useEffect, useState } from 'react'
import { Theme } from '@material-ui/core'
import createStyles from '@material-ui/core/styles/createStyles'
import clsx from 'clsx'
import { AppBar, AppBarBasicProps } from '../Appbar'
import { StyleProps } from '../StyleProps'
import { ToolsMenuProps, ToolsMenu } from '../ToolsMenu'
import { useDebouncedCallback } from 'use-debounce'
import { Theme as SBTheme, useTheme } from '@smartb/archetypes-ui-components'
import { DrawerMenu, DrawerMenuBasicProps, MenuItem } from '../DrawerMenu'
import { lowLevelStyles } from '../Types'

const useStyles = (customTheme: SBTheme) =>
  lowLevelStyles<Theme, StyleProps>((theme: Theme) =>
    createStyles({
      appbar: (props) => ({
        height: `${props.appBarHeight}px`,
        backgroundColor: customTheme.hex.primaryColor,
        boxShadow: customTheme.shadows[4],
        '& .MuiToolbar-root': {
          height: '100%'
        },
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      }),
      appBarOpen: (props) => ({
        width: `calc(100% - ${props.menuWidth}px)`,
        marginLeft: `${props.menuWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      }),
      titleContainer: (props) => ({
        height: `${props.appBarHeight}px`,
        paddingLeft: '10px',
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        marginLeft: `0px`,
        top: '0px',
        left: '0px',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      }),
      titleContainerOpen: (props) => ({
        marginLeft: `${props.menuWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      }),
      drawer: (props) => ({
        width: `${props.menuWidth}px`,
        '& .MuiDrawer-paper': {
          top: `0px`,
          zIndex: 1000,
          width: `${props.menuWidth}px`,
          background: 'white',
          height: `100vh`,
          overflowX: 'hidden',
          transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
          })
        }
      }),
      drawerClosed: (props) => ({
        '& .MuiDrawer-paper': {
          transform: `translateX(-${props.menuWidth}px)`,
          transition: theme.transitions.create('transform', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.leavingScreen
          })
        }
      }),
      main: (props) => ({
        flexGrow: 1,
        transition: theme.transitions.create('padding', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        paddingTop: props.appBarHeight,
        paddingLeft: props.menuWidth
      }),
      mainShift: (props) => ({
        flexGrow: 1,
        paddingTop: props.appBarHeight,
        transition: theme.transitions.create('padding', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }),
        paddingLeft: 0
      }),
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
}

interface AppStyles {
  main?: React.CSSProperties
}

export interface AppProps {
  /**
   * An array that contains every tools menu that will be displayed in the navBar
   *
   * **See the reference below** ⬇️
   */
  toolsMenuProps?: ToolsMenuProps[]
  /**
   * The optionnal props of the appBar (normaly given to override classes and styles)
   *
   * **See the reference below** ⬇️
   */
  appBarProps?: Partial<AppBarBasicProps>
  /**
   * The optionnal props of the drawer menu (normaly given to override classes and styles)
   *
   * **See the reference below** ⬇️
   */
  drawerMenuProps?: Partial<DrawerMenuBasicProps>
  /**
   * The content that will be displayed in the navBAr at the left of the profile
   */
  navBarContent?: React.ReactNode
  /**
   * The list of the actions that will be displayed in the drawer menu
   */
  menu?: MenuItem[]
  /**
   * The application that has to be surrounded by the navbar and the drawer
   */
  children?: React.ReactNode
  /**
   * The logo in the navBAr
   */
  logo: string
  /**
   * Defined if the drawer is open or not
   */
  open: boolean
  /**
   * The title that will be displayed in the navBar
   */
  title?: string
  /**
   * The style of the navBar and the drawer
   */
  styleProps: StyleProps
  /**
   * Defined if the appBar (navBar + drawer) will be displayed or not
   */
  showAppBar?: boolean
  /**
   * The content that will be displayed in the drawer below the menu
   */
  drawerContent?: React.ReactNode
  /**
   * The function that is called when the hamburger button is clicked
   */
  onToggle: () => void
  /**
   * The classes applied to the different part of the component
   */
  classes?: AppClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: AppStyles
}

const defaultProps = {
  showAppBar: true
}

export const App = (props: AppProps) => {
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
  const theme = useTheme()
  const defaultClasses = useStyles(theme)(styleProps)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [handleResize] = useDebouncedCallback(() => {
    const min = Math.min.apply(Math, [window.innerWidth, innerWidth])
    const max = Math.max.apply(Math, [window.innerWidth, innerWidth])
    if ((min < 400 && max > 400) || (min < 600 && max > 600)) {
      setInnerWidth(window.innerWidth)
    }
  }, 500)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <React.Fragment>
      <AppBar
        className={clsx(
          defaultClasses.appbar,
          open && defaultClasses.appBarOpen
        )}
        classes={{
          ...appBarProps?.classes,
          titleContainer: clsx(
            appBarProps?.classes?.titleContainer,
            defaultClasses.titleContainer,
            open && defaultClasses.titleContainerOpen
          )
        }}
        logo={logo}
        onDrawerOpen={onToggle}
        show={showAppBar}
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
        className={clsx(
          defaultClasses.drawer,
          !open && defaultClasses.drawerClosed
        )}
        menu={menu}
        styleProps={styleProps}
        toolsMenuProps={window.innerWidth <= 400 ? toolsMenuProps : undefined}
        navBarContent={window.innerWidth <= 600 && navBarContent}
        {...drawerMenuProps}
      >
        {drawerContent}
      </DrawerMenu>
      <main
        className={clsx(
          open ? defaultClasses.main : defaultClasses.mainShift,
          'AruiApp-main',
          classes?.main
        )}
        style={styles?.main}
      >
        <div
          className={defaultClasses.hidder}
          style={{
            display: window.innerWidth < 768 && open ? 'block' : 'none'
          }}
          onClick={onToggle}
        />
        {children}
      </main>
    </React.Fragment>
  )
}

App.defaultProps = defaultProps
