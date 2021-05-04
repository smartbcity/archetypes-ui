import { makeStyles } from '@material-ui/core'
import { Styles } from '@material-ui/core/styles/withStyles'
import { Theme as MuiTheme } from '@material-ui/core/styles'

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

export function lowLevelStyles<
  Theme = MuiTheme,
  Props extends object = {},
  ClassKey extends string = string
>(styles: Styles<Theme, Props, ClassKey>) {
  return makeStyles(styles, { index: -10 })
}

export type MergeReactElementProps<
  T extends React.ElementType,
  P extends object = {}
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P

export type MergeMuiElementProps<MuiElement, P extends object = {}> = Omit<MuiElement, keyof P> &
  P
