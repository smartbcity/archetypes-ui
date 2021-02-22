import React from 'react'
import { Delete } from '../icons'
import { lowLevelStyles } from '../Types'
import { Button, ButtonProps } from './Button'

const useStyles = lowLevelStyles({
  icon: {
    width: '16px',
    height: '16px',
    marginRight: '5px'
  }
})

export const DeleteButton = (props: ButtonProps) => {
  const classes = useStyles()
  return (
    <Button
      variant='text'
      icon={<Delete color={'#828282'} className={classes.icon} />}
      {...props}
    />
  )
}
