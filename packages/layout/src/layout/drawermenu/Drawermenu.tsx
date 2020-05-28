import React from 'react'
import styled from 'styled-components'
import MuiDrawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { MenuItem } from './menu'
import StyleProps from '../StyleProps'
import { IconProfileProps } from '../profile'
import { PanelProfile } from '../PanelProfile'

// TODO style only on desktop size
const Nav = styled.nav<WidthProps>`
  width: ${(props) => props.width};
  flex-shrink: 0;
`

export interface WidthProps {
  width: number
}

interface Props {
  className?: string
  open: boolean
  menu?: MenuItem[]
  styleProps: StyleProps
  children?: React.ReactNode
  profilesProps?: IconProfileProps[]
  navBarContent?: React.ReactNode
}

export const SBDrawerMenu = ({
  open,
  className,
  menu,
  styleProps,
  children,
  profilesProps,
  navBarContent
}: Props) => {
  return (
    <Nav width={styleProps.menuWidth}>
      <MuiDrawer
        variant={'persistent'}
        open={open || undefined}
        className={className}
      >
        {menu && (
          <div>
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
        {profilesProps &&
          profilesProps.map((profileProps) => (
            <PanelProfile
              menu={profileProps.menu}
              key={profileProps.menu.key}
            />
          ))}
      </MuiDrawer>
    </Nav>
  )
}
