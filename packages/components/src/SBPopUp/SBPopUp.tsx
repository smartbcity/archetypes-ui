import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent
} from '@material-ui/core'
import { MeButton, Variant } from '../MeButton'

export type Action = {
  label: string
  handler: (event: React.ChangeEvent<{}>) => void
  variant?: Variant
}

interface SBPopUpProps {
  open: boolean
  onClose: (event: React.ChangeEvent<{}>) => void
  actions?: Action[]
  title?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
}

export const SBPopUp = (props: SBPopUpProps) => {
  const { open, onClose, actions, title, children, style, className } = props
  return (
    <Dialog
      open={open}
      onClose={onClose}
      style={style}
      PaperProps={{ elevation: 12 }}
      className={className}
    >
      {!!title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children ? children : ''}</DialogContent>
      <DialogActions style={{ justifyContent: 'space-around' }}>
        {actions &&
          actions.map((action, index) => (
            <MeButton
              label={action.label}
              key={index}
              variant={action.variant ? action.variant : 'contained'}
              style={{ borderRadius: '5px', padding: '5px 6px' }}
              onClick={action.handler}
            />
          ))}
      </DialogActions>
    </Dialog>
  )
}
