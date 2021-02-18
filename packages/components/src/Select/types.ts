export const classes = `interface SelectClasses {
  label?: string
  select?: string
}`

export const styles = `interface SelectStyles {
  label?: React.CSSProperties
  select?: React.CSSProperties
}`

export const SelectItem = `interface SelectItem {
  value: string
  label: string
}`

export const onChange = ` onChange?: (
  event: React.ChangeEvent<{ name?: string; value: unknown }>,
  child: React.ReactNode
) => void`
