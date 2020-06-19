export const types = `interface MenuItem {
  key: string
  goto?: () => void
  label: string
  icon?: JSX.Element
}

interface Menu extends MenuItem {
  items?: Menu[]
}

interface ItemsLayoutProps extends BasicProps {
  menu: Menu
  display?: Display
  classes?: ItemsLayoutClasses
  styles?: ItemsLayoutStyles
}

interface TabsMenuProps extends BasicProps {
  tabs: Tab[]
  children: React.ReactNode[]
  variant?: Variant
  classes?: TabsMenuClasses
  styles?: TabsMenuStyles
}

interface BasicProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
}

interface ToolsMenuClasses {
  iconButton?: string
  menu?: string
}

interface ToolsMenuStyles {
  iconButton?: React.CSSProperties
  menu?: React.CSSProperties
}
  `
