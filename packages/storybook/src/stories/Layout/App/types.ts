export const types = `interface ToolsMenuProps extends BasicProps {
  menu: SBMenu
  display?: Display
  classes?: ToolsMenuClasses
  styles?: ToolsMenuStyles
  itemsLayoutProps?: ItemsLayoutProps
  tabsMenuProps?: TabsMenuProps
}

interface AppBarProps extends BasicProps {
  title?: string
  logo: string
  onDrawerOpen: () => void
  profiles?: React.ReactNode
  content?: React.ReactNode
  classes?: AppBarClasses
  styles?: AppBarStyles
}

interface DrawerMenuProps extends BasicProps {
  open: boolean
  menu?: MenuItem[]
  styleProps: StyleProps
  children?: React.ReactNode
  toolsMenuProps?: ToolsMenuProps[]
  navBarContent?: React.ReactNode
  classes?: DrawermenuClasses
  styles?: DrawermenuStyles
}

interface BasicProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
}

interface SimpleMenuItem {
  key: string
  goto: () => void
  label: string
}

interface MenuItem {
  key: string
  goto?: () => void
  label: string
  icon?: JSX.Element
}

interface Menu extends MenuItem {
  items?: Menu[]
}

interface AppClasses {
  main?: string
  content?: string
}

interface AppStyles {
  main?: React.CSSProperties
  content?: React.CSSProperties
}
  `
