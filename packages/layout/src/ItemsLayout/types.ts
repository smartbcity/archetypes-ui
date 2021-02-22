export const classes = `interface ItemsLayoutClasses {
  gridContainer?: string
  gridItem?: string
  listItem?: string
}`
export const styles = `interface ItemsLayoutStyles {
  gridContainer?: React.CSSProperties
  gridItem?: React.CSSProperties
  listItem?: React.CSSProperties
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
