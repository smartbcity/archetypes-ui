import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemProps,
  ListProps
} from '@material-ui/core'
import { MenuItem } from './MenuItem'
import React, { useCallback } from 'react'
import {
  BasicProps,
  MergeMuiElementProps
} from '@smartb/archetypes-ui-components/src/Types'

interface MenuContainerClasses {
  item?: string
  icon?: string
  text?: string
}

interface MenuContainerStyles {
  item?: React.CSSProperties
  icon?: React.CSSProperties
  text?: React.CSSProperties
}

export interface MenuContainerBasicProps extends BasicProps {
  menu: MenuItem[]
  classes?: MenuContainerClasses
  styles?: MenuContainerStyles
}

export type MenuContainerProps = MergeMuiElementProps<
  ListProps,
  MenuContainerBasicProps
>

export const MenuContainer = (props: MenuContainerProps) => {
  const { menu, classes, styles, ...other } = props
  return (
    <List {...other}>
      {menu.map((item) => (
        <Item className={classes?.item} style={styles?.item} {...item} />
      ))}
    </List>
  )
}

interface ItemClasses {
  icon?: string
  text?: string
}

interface ItemStyles {
  icon?: React.CSSProperties
  text?: React.CSSProperties
}

interface ItemBasicProps extends BasicProps {
  classes?: ItemClasses
  styles?: ItemStyles
}

type ItemProps = MergeMuiElementProps<ListItemProps, ItemBasicProps & MenuItem>

const Item = (props: ItemProps) => {
  const {
    goto,
    icon,
    label,
    href,
    onClick,
    button,
    component,
    classes,
    styles,
    ...other
  } = props
  const onItemClick = useCallback(() => goto && !href && goto(), [goto, href])
  return (
    <ListItem
      button
      component={component ? component : href ? 'a' : 'div'}
      onClick={onItemClick}
      href={href}
      {...other}
    >
      <ListItemIcon className={classes?.icon} style={styles?.icon}>
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={label}
        className={classes?.text}
        style={styles?.text}
      />
    </ListItem>
  )
}
