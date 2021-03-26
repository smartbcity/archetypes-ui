import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemProps,
  ListProps
} from '@material-ui/core'
import { Menu } from './MenuItem'
import React, { Fragment, useCallback, useMemo } from 'react'
import {
  BasicProps,
  MergeMuiElementProps,
  Theme,
  lowLevelStyles,
  useTheme
} from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'

const useStyles = (paddingLeft: number, theme: Theme) =>
  lowLevelStyles({
    item: {
      paddingLeft: `${paddingLeft}px`
    },
    selectedItem: {
      background: `${theme.primaryColor}26`
    },
    selectedTitle: {
      color: theme.primaryColor
    },
    itemText: {
      '& .MuiTypography-root': {
        fontSize: `${17 - paddingLeft / 20}px`,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }
  })

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
  paddingLeft?: number
}

export type MenuContainerProps = MergeMuiElementProps<
  ListProps,
  MenuContainerBasicProps
>

export const MenuContainer = (props: MenuContainerProps) => {
  const { menu, classes, styles, paddingLeft, ...other } = props
  const uiMenu = useMemo(
    () =>
      menu.map((item) => (
        <Item
          classes={classes}
          styles={styles}
          paddingLeft={paddingLeft}
          {...item}
        />
      )),
    [classes, styles, menu, paddingLeft]
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
  paddingLeft?: number
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
    isSelected = false,
    classes,
    styles,
    paddingLeft = 16,
    ...other
  } = props
  const onItemClick = useCallback(() => goto && !href && goto(), [goto, href])
  const theme = useTheme()
  const defaultClasses = useStyles(paddingLeft, theme)()
  if (items !== undefined && items.length > 0)
    return (
      <Fragment>
        <ListItem
          style={styles?.item?.root}
          {...componentProps}
          {...other}
          className={clsx(classes?.item?.root, defaultClasses.item)}
        >
          {!!icon && (
            <ListItemIcon
              className={classes?.item?.icon}
              style={styles?.item?.icon}
            >
              {icon}
            </ListItemIcon>
          )}
          <ListItemText
            primaryTypographyProps={{ color: 'inherit' }}
            primary={label}
            className={clsx(
              classes?.item?.text,
              defaultClasses.itemText,
              isSelected && defaultClasses.selectedTitle
            )}
            style={styles?.item?.text}
          />
        </ListItem>
        <MenuContainer paddingLeft={paddingLeft + 15} menu={items} />
      </Fragment>
    )
  return (
    <ListItem
      button
      component={component ? component : href ? 'a' : 'div'}
      onClick={onItemClick}
      href={href}
      style={styles?.item?.root}
      {...componentProps}
      {...other}
      className={clsx(
        classes?.item?.root,
        defaultClasses.item,
        isSelected && defaultClasses.selectedItem
      )}
    >
      {!!icon && (
        <ListItemIcon
          className={classes?.item?.icon}
          style={styles?.item?.icon}
        >
          {icon}
        </ListItemIcon>
      )}
      <ListItemText
        primaryTypographyProps={{ color: 'inherit' }}
        primary={label}
        className={clsx(classes?.item?.text, defaultClasses.itemText)}
        style={styles?.item?.text}
      />
    </ListItem>
  )
}
