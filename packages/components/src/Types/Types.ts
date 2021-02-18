export interface BasicProps {
  /**
   * The id of the root component
   */
  id?: string
  /**
   * The style of the root component
   */
  style?: React.CSSProperties
  /**
   * The className of the root component
   */
  className?: string
}

export type MergeReactElementProps<
  T extends React.ElementType,
  P extends object = {}
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P

export type MergeMuiElementProps<T, P extends object = {}> = Omit<T, keyof P> &
  P
