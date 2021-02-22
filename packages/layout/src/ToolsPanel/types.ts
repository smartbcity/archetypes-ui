export const classes = `interface ToolsMenuClasses {
  iconButton?: string
  menu?: string
}`
export const styles = `interface ToolsMenuStyles {
  iconButton?: React.CSSProperties
  menu?: React.CSSProperties
}`
export const Menu = `interface MenuItem {
  key: string
  goto?: () => void
  label: string
  icon?: JSX.Element
}

interface Menu extends MenuItem {
  items?: Menu[]
}`
