import React from 'react'
import { Edit } from '../icons'
import { lowLevelStyles } from '../Types'
import { Button, ButtonProps } from './Button'

const useStyles = lowLevelStyles({
  icon: {
    width: '19px',
    height: '19px',
    marginRight: '5px'
  }
})

export const EditButton = function <T = {}>(props: ButtonProps<T>) {
  const classes = useStyles()
  return (
    <Button
      variant='text'
      icon={<Edit color={'#828282'} className={classes.icon} />}
      {...props}
    />
  )
}
