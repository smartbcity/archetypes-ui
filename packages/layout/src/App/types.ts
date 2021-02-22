export const classes = `interface AppClasses {
  main?: string
  content?: string
}`
export const styles = `interface AppStyles {
  main?: React.CSSProperties
  content?: React.CSSProperties
}`
export const MenuItem = `interface MenuItem {
  key: string
  goto?: () => void
  label: string
  icon?: JSX.Element
}`
export const StyleProps = `interface StyleProps {
  detailDrawerWidth: number;
  appBarHeight: number;
  menuWidth: number;
}`
