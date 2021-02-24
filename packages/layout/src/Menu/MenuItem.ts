export interface MenuItem {
  key: string
  goto?: () => void
  href?: string
  label: string
  component?: React.ElementType<any>
  icon?: JSX.Element
}

export interface Menu extends MenuItem {
  items?: Menu[]
}
