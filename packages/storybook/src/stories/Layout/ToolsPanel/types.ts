export const types = `interface MenuItem {
  key: string
  goto?: () => void
  label: string
  icon?: JSX.Element
}

interface Menu extends MenuItem {
  items?: Menu[]
}
  `
