import React from 'react'
import { Arrow } from '../icons'
import { lowLevelStyles } from '../Types'
import { Button, ButtonProps } from './Button'

const useStyles = lowLevelStyles({
  arrow: {
    marginLeft: '-8px',
    marginRight: '8px',
    marginTop: '-1px',
    width: '20px',
    height: '20px'
  }
})

export const BackButton = (props: ButtonProps) => {
  const classes = useStyles()
  return (
    <Button
      variant='text'
      icon={<Arrow className={classes.arrow} />}
      {...props}
    />
  )
}
