export const types = `interface MenuItem {
  key: string
  goto?: () => void
  label: string
  icon?: JSX.Element
}

interface Menu extends MenuItem {
  items?: Menu[]
}

interface ItemsLayoutClasses {
  gridContainer?: string
  gridItem?: string
  listItem?: string
}

interface ItemsLayoutStyles {
  gridContainer?: React.CSSProperties
  gridItem?: React.CSSProperties
  listItem?: React.CSSProperties
}
  `
