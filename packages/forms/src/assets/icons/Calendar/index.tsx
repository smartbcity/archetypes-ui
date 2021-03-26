import React from 'react'
import { ReactComponent } from './calendar.svg'
import { MergeReactElementProps } from '@smartb/archetypes-ui-themes'

interface CalendarProps {
  color?: string
}

type Props = MergeReactElementProps<'svg', CalendarProps>

export const Calendar = React.forwardRef(
  (props: Props, ref: React.Ref<SVGSVGElement>) => {
    const { color = 'white' } = props
    return <ReactComponent stroke={color} fill='none' ref={ref} {...props} />
  }
)
