import React from 'react'
import styled from 'styled-components'
import MuiDrawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { MenuItem } from './menu'
import StyleProps from '../StyleProps'
import { ToolsMenuProps } from '../ToolsMenu'
import { ToolsPanel } from '../ToolsPanel'
import { BasicProps } from '@smartb/archetypes-ui-components'
import { DrawerProps } from '@material-ui/core'
import { MergeMuiElementProps } from '../Types'
import clsx from 'clsx'

// TODO style only on desktop size
const Nav = styled.nav<WidthProps>`
  width: ${(props) => props.width};
  flex-shrink: 0;
`

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

export interface DrawerMenuProps extends BasicProps {
  open: boolean
  menu?: MenuItem[]
  styleProps: StyleProps
  children?: React.ReactNode
  toolsMenuProps?: ToolsMenuProps[]
  navBarContent?: React.ReactNode
  classes?: DrawermenuClasses
  styles?: DrawermenuStyles
}

type Props = MergeMuiElementProps<DrawerProps, DrawerMenuProps>

export const DrawerMenu = (props: Props) => {
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

  return (
    <Nav
      width={styleProps.menuWidth}
      className={clsx(className, 'AruiDrawerMenu-root')}
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
                  key={item.key}
                  onClick={() => item.goto && item.goto()}
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
    </Nav>
  )
}
