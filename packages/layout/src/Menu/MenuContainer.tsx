import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemProps,
  ListProps,
  ListSubheader
} from '@material-ui/core'
import { Menu } from './MenuItem'
import React, { Fragment, useCallback, useMemo } from 'react'
import {
  BasicProps,
  MergeMuiElementProps
} from '@smartb/archetypes-ui-components/src/Types'

interface MenuContainerClasses {
  item?: ItemClasses
  icon?: string
  text?: string
}

interface MenuContainerStyles {
  item?: ItemStyles
  icon?: React.CSSProperties
  text?: React.CSSProperties
}

export interface MenuContainerBasicProps extends BasicProps {
  menu: Menu[]
  classes?: MenuContainerClasses
  styles?: MenuContainerStyles
}

export type MenuContainerProps = MergeMuiElementProps<
  ListProps,
  MenuContainerBasicProps
>

export const MenuContainer = (props: MenuContainerProps) => {
  const { menu, classes, styles, ...other } = props
  const uiMenu = useMemo(
    () =>
      menu.map((item) => <Item classes={classes} styles={styles} {...item} />),
    [classes, styles, menu]
  )
  return <List {...other}>{uiMenu}</List>
}

interface ItemClasses {
  root?: string
  icon?: string
  text?: string
}

interface ItemStyles {
  root?: React.CSSProperties
  icon?: React.CSSProperties
  text?: React.CSSProperties
}

interface ItemBasicProps extends BasicProps {
  classes?: MenuContainerClasses
  styles?: MenuContainerStyles
}

type ItemProps = MergeMuiElementProps<ListItemProps, ItemBasicProps & Menu>

const Item = (props: ItemProps) => {
  const {
    goto,
    icon,
    label,
    href,
    onClick,
    componentProps,
    button,
    items,
    component,
    classes,
    styles,
    ...other
  } = props
  const onItemClick = useCallback(() => goto && !href && goto(), [goto, href])
  if (items !== undefined && items.length > 0)
    return (
      <Fragment>
        <ListSubheader>{label}</ListSubheader>
        <MenuContainer menu={items} />
      </Fragment>
    )
  return (
    <ListItem
      button
      component={component ? component : href ? 'a' : 'div'}
      onClick={onItemClick}
      href={href}
      className={classes?.item?.root}
      style={styles?.item?.root}
      {...componentProps}
      {...other}
    >
      <ListItemIcon className={classes?.item?.icon} style={styles?.item?.icon}>
        {icon}
      </ListItemIcon>
      <ListItemText
        primary={label}
        className={classes?.item?.text}
        style={styles?.item?.text}
      />
    </ListItem>
  )
}
