import React from 'react'
import MuiDrawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { MenuItem } from './Menu'
import { StyleProps } from '../StyleProps'
import { ToolsMenuProps } from '../ToolsMenu'
import { ToolsPanel } from '../ToolsPanel'
import { DrawerProps } from '@material-ui/core'
import { BasicProps, lowLevelStyles, MergeMuiElementProps } from '../Types'
import clsx from 'clsx'

const useStyles = (width: number) =>
  lowLevelStyles({
    nav: {
      width: width,
      flexShrink: 0
    }
  })

export interface WidthProps {
  width: number
}

interface DrawermenuClasses {
  drawer?: string
  menu?: string
}

interface DrawermenuStyles {
  drawer?: React.CSSProperties
  menu?: React.CSSProperties
}

export interface DrawerMenuBasicProps extends BasicProps {
  /**
   * Define if the drawer menu is open or not
   */
  open: boolean
  /**
   * Items of the drawer menu
   */
  menu?: MenuItem[]
  /**
   * The styles applied to the navBar
   */
  styleProps: StyleProps
  /**
   * The content that will be displayed in the body of the drawer menu
   */
  children?: React.ReactNode
  /**
   * An array that contains every tools menu that will be displayed in the navBar
   *
   * **See the reference below** ⬇️
   */
  toolsMenuProps?: ToolsMenuProps[]
  /**
   * The content that will be displayed in the navBar at the left of the profile
   */
  navBarContent?: React.ReactNode
  /**
   * The classes applied to the different part of the component
   */
  classes?: DrawermenuClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: DrawermenuStyles
}

export type DrawerMenuProps = MergeMuiElementProps<
  DrawerProps,
  DrawerMenuBasicProps
>

export const DrawerMenu = (props: DrawerMenuProps) => {
  const {
    open = false,
    className,
    menu,
    styleProps,
    children,
    toolsMenuProps,
    navBarContent,
    style,
    id,
    classes,
    styles,
    ...other
  } = props
  const defaultClasses = useStyles(styleProps.menuWidth)()

  return (
    <nav
      className={clsx(className, 'AruiDrawerMenu-root', defaultClasses.nav)}
      style={style}
      id={id}
    >
      <MuiDrawer
        variant={'persistent'}
        open={open || undefined}
        className={clsx(classes?.drawer, 'AruiDrawerMenu-drawer')}
        style={styles?.drawer}
        {...other}
      >
        {menu && (
          <div
            className={clsx(classes?.menu, 'AruiDrawerMenu-drawer')}
            style={styles?.menu}
          >
            <List>
              {menu.map((item) => (
                <ListItem
                  button
                  component={item.href ? 'a' : 'div'}
                  key={item.key}
                  onClick={() => item.goto && !item.href && item.goto()}
                  href={item.href}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </div>
        )}
        {children}
        {navBarContent}
        {toolsMenuProps &&
          toolsMenuProps.map((toolsMenuProps) => (
            <ToolsPanel
              menu={toolsMenuProps.menu}
              key={toolsMenuProps.menu.key}
            />
          ))}
      </MuiDrawer>
    </nav>
  )
}
