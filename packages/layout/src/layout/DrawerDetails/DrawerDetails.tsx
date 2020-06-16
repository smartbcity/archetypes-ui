import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import { Drawer, Theme, DrawerProps } from '@material-ui/core'
import StyleProps from '../StyleProps'
import { MergeMuiElementProps, BasicProps } from '../Types'
import clsx from 'clsx'

interface DrawerDetailsProps extends BasicProps {
  onClose: () => void
  children?: React.ReactNode
  styleProps: StyleProps
}

const useStyles = makeStyles<Theme, StyleProps>(() =>
  createStyles({
    drawer: (props) => ({
      '& .MuiDrawer-paper': {
        top: `${props.appBarHeight}px`,
        width: `${props.detailDrawerWidth}px`,
        background: 'white'
      },
      '& .MuiBackdrop-root': {
        backgroundColor: 'transparent'
      }
    })
  })
)

type Props = MergeMuiElementProps<DrawerProps, DrawerDetailsProps>

export const DrawerDetails = (props: Props) => {
  const {
    onClose,
    children,
    styleProps,
    className,
    style,
    id,
    ...other
  } = props
  const classes = useStyles(styleProps)
  return (
    <Drawer
      onBackdropClick={onClose}
      open={true}
      anchor='right'
      onClose={onClose}
      className={clsx(classes.drawer, 'AruiDrawerDetail-root', className)}
      style={style}
      id={id}
      {...other}
    >
      {children}
    </Drawer>
  )
}
