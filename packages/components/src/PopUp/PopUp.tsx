import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogProps,
  makeStyles
} from '@material-ui/core'
import { Button, Variant } from '../Button'
import { MergeMuiElementProps, BasicProps } from '../Types'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  actionsContainer: {
    justifyContent: 'space-around'
  },
  button: {
    borderRadius: '5px',
    padding: '5px 6px'
  }
}))

export type Action = {
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
}

interface PopUpProps extends BasicProps {
  open: boolean
  onClose: (event: React.ChangeEvent<{}>) => void
  actions?: Action[]
  title?: string
  children?: React.ReactNode
  classes?: PopUpClasses
  styles?: PopUpStyles
}

type Props = MergeMuiElementProps<DialogProps, PopUpProps>

export const PopUp = (props: Props) => {
  const {
    open,
    onClose,
    actions,
    title,
    children,
    style,
    className,
    id,
    classes,
    styles,
    ...other
  } = props
  const defaultClasses = useStyles()
  return (
    <Dialog
      open={open}
      onClose={onClose}
      style={style}
      id={id}
      PaperProps={{ elevation: 12 }}
      className={clsx(className, 'AruiPopUp-root')}
      {...other}
    >
      {!!title && (
        <DialogTitle
          className={clsx(classes?.title, 'AruiPopUp-content')}
          style={styles?.title}
        >
          {title}
        </DialogTitle>
      )}
      <DialogContent
        className={clsx(classes?.content, 'AruiPopUp-content')}
        style={styles?.content}
      >
        {children ? children : ''}
      </DialogContent>
      <DialogActions
        className={clsx(
          defaultClasses.actionsContainer,
          'AruiPopUp-actions',
          classes?.actions
        )}
        style={styles?.actions}
      >
        {actions &&
          actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant ? action.variant : 'contained'}
              className={clsx(
                defaultClasses.button,
                'AruiPopUp-button',
                classes?.button
              )}
              style={styles?.button}
              onClick={action.handler}
            >
              {action.label}
            </Button>
          ))}
      </DialogActions>
    </Dialog>
  )
}
