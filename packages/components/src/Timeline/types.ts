export const classes = `interface TimelineClasses {
  item?: string
  content?: string
  timeContainer?: string
  startDot?: string
  endDot?: string
  connector?: string
  separator?: string
}`

export const styles = `interface TimelineStyles {
  item?: React.CSSProperties
  content?: React.CSSProperties
  timeContainer?: React.CSSProperties
  startDot?: React.CSSProperties
  endDot?: React.CSSProperties
  connector?: React.CSSProperties
  separator?: React.CSSProperties
}`

export const TimeLineCell = `interface TimeLineCell {
  id: string
  startTime: string
  endTime?: string
  startDate?: number
  endDate?: number
  content: React.ReactNode
  startDot?: React.ReactNode
  endDot?: React.ReactNode
  disabled?: boolean
}`
