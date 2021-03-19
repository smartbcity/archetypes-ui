import React from 'react'
import { ReactComponent } from './delete.svg'
import { MergeReactElementProps } from '@smartb/archetypes-ui-themes'

interface DeleteProps {
  color?: string
}

type Props = MergeReactElementProps<'svg', DeleteProps>

export const Delete = React.forwardRef(
  (props: Props, ref: React.Ref<SVGSVGElement>) => {
    const { color = '#9a9a9a' } = props
    return <ReactComponent stroke={color} ref={ref} {...props} />
  }
)
