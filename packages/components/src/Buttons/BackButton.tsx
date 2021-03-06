import React, { forwardRef } from 'react'
import { Arrow } from '../icons'
import { lowLevelStyles } from '@smartb/archetypes-ui-themes'
import { Button, ButtonProps } from './Button'

const useStyles = lowLevelStyles()({
  arrow: {
    marginLeft: '-8px',
    marginRight: '8px',
    marginTop: '-1px',
    width: '20px',
    height: '20px'
  }
})

const BackButtonBase = function <T = {}>(props: ButtonProps<T>, ref: React.ForwardedRef<HTMLButtonElement>) {
  const classes = useStyles()
  return (
    <Button
      variant='text'
      icon={<Arrow className={classes.arrow} />}
      ref={ref}
      {...props}
    />
  )
}

export const BackButton = forwardRef(BackButtonBase) as typeof BackButtonBase
