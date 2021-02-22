export const classes = `interface DrawermenuClasses {
  drawer?: string
  menu?: string
}`
export const styles = `interface DrawermenuStyles {
  drawer?: React.CSSProperties
  menu?: React.CSSProperties
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
