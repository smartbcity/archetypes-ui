import React, { useState } from 'react'
import { Menu as SBMenu } from '../DrawerMenu'
import { IconButton, Menu } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { ItemsLayout, Display, ItemsLayoutProps } from '../ItemsLayout'
import { TabsMenuProps } from '../TabsMenu'
import { TabsMenu } from '../TabsMenu'
import clsx from 'clsx'
import { BasicProps } from '../Types'
const useStyles = makeStyles(() =>
  createStyles({
    menu: {
      maxWidth: '300px',
      maxHeight: '500px'
    },
    menuGrid: {
      maxWidth: '375px'
    },
    list: {
      padding: '0 !important',
      width: '100% !important',
      '& > div': {
        outline: '0 !important'
      }
    },
    menuOpened: {
      backgroundColor: 'rgba(0, 0, 0, 0.04)'
    },
    gridItemsLayoutMinWidth: {
      maxWidth: '375px',
      maxHeight: '410px',
      minWidth: '358px'
    },
    gridItemsLayout: {
      maxWidth: '375px',
      maxHeight: '410px'
    },
    listItemsLayout: {
      maxHeight: '410px',
      overflow: 'auto'
    }
  })
)

interface ToolsMenuClasses {
  iconButton?: string
  menu?: string
}

interface ToolsMenuStyles {
  iconButton?: React.CSSProperties
  menu?: React.CSSProperties
}

export interface ToolsMenuProps extends BasicProps {
  /**
   * Menu contains all the items that will be displayed in the profile
   */
  menu: SBMenu
  /**
   * The organization of the items
   */
  display?: Display
  /**
   * The classes applied to the different part of the component
   */
  classes?: ToolsMenuClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: ToolsMenuStyles
  /**
   * The optionnal props of the ItemsLayout (normaly given to override classes and styles)
   */
  itemsLayoutProps?: Partial<ItemsLayoutProps>
  /**
   * The optionnal props of the TabsMenu (normaly given to override classes and styles)
   */
  tabsMenuProps?: Partial<TabsMenuProps>
}

export const ToolsMenu = (props: ToolsMenuProps) => {
  const {
    menu,
    style,
    display = 'list',
    className,
    id,
    classes,
    styles,
    itemsLayoutProps,
    tabsMenuProps
  } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const defaultClasses = useStyles()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div
      className={clsx(className, 'AruiToolsMenu-root')}
      style={style}
      id={id}
    >
      <IconButton
        className={clsx(
          { [defaultClasses.menuOpened]: !!open },
          'AruiToolsMenu-iconButton',
          classes?.iconButton
        )}
        style={styles?.iconButton}
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        {menu.icon}
      </IconButton>
      <Menu
        className={clsx('AruiToolsMenu-menu', classes?.menu)}
        style={styles?.menu}
        classes={{
          paper: `${defaultClasses.menu} ${
            display === 'grid' && defaultClasses.menuGrid
          }`,
          list: defaultClasses.list
        }}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        anchorEl={anchorEl}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {menu.items && menu.items.length === 1 ? (
          <ItemsLayout
            menu={menu.items[0]}
            display={display}
            {...itemsLayoutProps}
          />
        ) : (
          <div>
            {menu.items && (
              <TabsMenu
                variant={display === 'list' ? 'fixedWidth' : 'fullWidth'}
                tabs={menu.items.map((it) => {
                  return { label: it.label, icon: it.icon }
                })}
                {...tabsMenuProps}
              >
                {menu.items &&
                  menu.items.map((section, index) => (
                    <div key={index}>
                      <ItemsLayout
                        menu={section}
                        display={display}
                        className={
                          display !== 'list'
                            ? section.items && section.items.length >= 3
                              ? defaultClasses.gridItemsLayoutMinWidth
                              : defaultClasses.gridItemsLayout
                            : defaultClasses.listItemsLayout
                        }
                        {...itemsLayoutProps}
                      />
                    </div>
                  ))}
              </TabsMenu>
            )}
          </div>
        )}
      </Menu>
    </div>
  )
}
