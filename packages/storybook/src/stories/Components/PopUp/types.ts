export const types = `type Action = {
    label: string
    handler: (event: React.ChangeEvent<{}>) => void
    variant?: Variant
}

interface PopUpClasses {
    title?: string
    content?: string
    actions?: string
    button?: string
}
  
interface PopUpStyles {
    title?: React.CSSProperties
    content?: React.CSSProperties
    actions?: React.CSSProperties
    button?: React.CSSProperties
}`
