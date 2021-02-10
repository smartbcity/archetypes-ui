import makeStyles from '@material-ui/core/styles/makeStyles'
import { StepIconProps as MuiStepIconProps } from '@material-ui/core'
import clsx from 'clsx'
import React, { Fragment } from 'react'
import { Theme, useTheme } from '@smartb/archetypes-ui-components'

const useStepIconStyles = (theme: Theme) =>
  makeStyles({
    root: {
      backgroundColor: theme.tertiaryColor,
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
      backgroundColor: theme.primaryColor,
      boxShadow: theme.primaryColor
    },
    completed: {
      backgroundColor: theme.primaryColor,
      boxShadow: theme.primaryColor
    },
    activeIcon: {
      border: '2px solid ' + theme.secondaryColor,
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
