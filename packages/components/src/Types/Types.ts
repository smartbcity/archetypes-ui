export interface BasicProps {
  id?: string
  style?: React.CSSProperties
  className?: string
}

export type MergeReactElementProps<
  T extends React.ElementType,
  P extends object = {}
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P

export type MergeMuiElementProps<T, P extends object = {}> = Omit<T, keyof P> &
  P
