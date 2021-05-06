import React from 'react'
import { Delete } from '../icons'
import { lowLevelStyles } from '@smartb/archetypes-ui-themes'
import { Button, ButtonProps } from './Button'

const useStyles = lowLevelStyles()({
  icon: {
    width: '20px',
    height: '20px',
    marginRight: '5px'
  }
})

export const DeleteButton = function <T = {}>(props: ButtonProps<T>) {
  const classes = useStyles()
  return (
    <Button
      variant='text'
      icon={<Delete color={'#828282'} className={classes.icon} />}
      {...props}
    />
  )
}
