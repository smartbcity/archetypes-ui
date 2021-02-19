import { StepIconProps as MuiStepIconProps } from '@material-ui/core'
import clsx from 'clsx'
import React, { Fragment } from 'react'
import { Theme, useTheme } from '@smartb/archetypes-ui-components'
import { lowLevelStyles } from '../Types'

const useStepIconStyles = (theme: Theme) =>
  lowLevelStyles({
    root: {
      backgroundColor: theme.hex.tertiaryColor,
      zIndex: 1,
      color: '#fff',
      width: 40,
      height: 40,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    active: {
      backgroundColor: theme.hex.primaryColor,
      boxShadow: theme.hex.primaryColor
    },
    completed: {
      backgroundColor: theme.hex.primaryColor,
      boxShadow: theme.hex.primaryColor
    },
    activeIcon: {
      border: '2px solid ' + theme.hex.secondaryColor,
      padding: '3px',
      borderRadius: '50%'
    }
  })

export const StepIcon = (props: MuiStepIconProps) => {
  const theme = useTheme()
  const classes = useStepIconStyles(theme)()
  const { active, completed, icon } = props
  return (
    <div className={clsx({ [classes.activeIcon]: active })}>
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed
        })}
      >
        {icon}
      </div>
    </div>
  )
}

export const StepEmptyIcon = () => {
  return <Fragment></Fragment>
}
