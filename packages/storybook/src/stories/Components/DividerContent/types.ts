export const types = `interface DividerContentStyles {
    content?: React.CSSProperties
    divider?: React.CSSProperties
    dividerBar?: React.CSSProperties
    dividerText?: React.CSSProperties
}

export interface DividerContentProps extends BasicProps {
    children: React.ReactNode | React.ReactNode[]
    dividerText?: string
    dividerDirection?: Direction
    classes?: DivderContentClasses
    styles?: DividerContentStyles
}
`
