export interface SimpleMenuItem {
  key: string
  goto?: () => void
  href?: string
  label: string
}

export interface MenuItem {
  key: string
  goto?: () => void
  href?: string
  label: string
  icon?: JSX.Element
}

export interface Menu extends MenuItem {
  items?: Menu[]
}
