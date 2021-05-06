import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemProps,
  ListProps
} from '@material-ui/core'
import { Menu } from './MenuItem'
import React, { useCallback, useMemo } from 'react'
import {
  BasicProps,
  MergeMuiElementProps,
  Theme,
  lowLevelStyles,
  useTheme
} from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'

const useStyles = lowLevelStyles<{paddingLeft: number, theme: Theme}>()({
    item: {
      paddingLeft: ({paddingLeft}) => `${paddingLeft}px`
    },
    selectedItem: {
      background: ({theme}) => `${theme.colors.primary}26`
    },
    selectedTitle: {
      '& .MuiTypography-root': {
        color: ({theme}) => theme.colors.primary
      }
    },
    itemText: {
      '& .MuiTypography-root': {
        fontSize: ({paddingLeft}) => `${17 - paddingLeft / 10}px`,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    },
    subList: {
      padding: '0px'
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
  subMenuProps?: Partial<MenuContainerProps>
  paddingLeft?: number
}

export type MenuContainerProps = MergeMuiElementProps<
  ListProps,
  MenuContainerBasicProps
>

export const MenuContainer = (props: MenuContainerProps) => {
  const { menu, classes, styles, paddingLeft, subMenuProps, ...other } = props
  const uiMenu = useMemo(
    () =>
      menu.map((item) => (
        <Item
          classes={classes}
          styles={styles}
          paddingLeft={paddingLeft}
          subMenuProps={subMenuProps}
          {...item}
        />
      )),
    [classes, styles, menu, paddingLeft, subMenuProps]
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
  subMenuProps?: Partial<MenuContainerProps>
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
    subMenuProps,
    ...other
  } = props
  const onItemClick = useCallback(() => goto && !href && goto(), [goto, href])
  const theme = useTheme()
  const stylesObject = useMemo(() => ({
    paddingLeft: paddingLeft,
    theme: theme
  }), [paddingLeft, theme])
  const defaultClasses = useStyles(stylesObject)
  if (items !== undefined && items.length > 0)
    return (
      <>
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
        <MenuContainer
          {...subMenuProps}
          className={clsx(subMenuProps, defaultClasses.subList)}
          paddingLeft={paddingLeft + 10}
          menu={items}
        />
      </>
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
        //on ajoute le style du text que si les objets le contenant éxiste
        style={styles?.item?.text}
      />
    </ListItem>
  )
}
