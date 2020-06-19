import React, { useContext } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import clsx from 'clsx'
import { StepConnector } from './StepConnector'
import { StepEmptyIcon, StepIcon } from './StepIcon'
import { StepperBase, StepperBaseProps, StepperBaseLabel } from '../StepperBase'
import { themeContext, Theme } from '@smartb/archetypes-ui-components'

const useStyles = (theme: Theme) =>
  makeStyles(() =>
    createStyles({
      transparent: {
        backgroundColor: '#ffffff',
        justifyContent: 'center'
      },
      stepper: {
        '& .AruiStepperBase-content': {
          position: 'relative',
          margin: 0
        },
        '& .AruiStepperBase-actions': {
          position: 'absolute',
          bottom: 10,
          right: 10
        }
      },
      button: {
        backgroundColor: theme.secondaryColor,
        '&:hover': {
          backgroundColor: theme.secondaryColor
        }
      }
    })
  )

export interface Props {
  stepperBaseProps: StepperBaseProps
  stepperBaseLabel: StepperBaseLabel
  empty?: boolean
}

export const Stepper = (props: Props) => {
  const { stepperBaseProps, empty = false, stepperBaseLabel } = props
  const theme = useContext(themeContext)
  const classes = useStyles(theme)()
  const AruiStepConnector = StepConnector(theme)
  return (
    <div className='AruiStepper-root'>
      {/* old className 'welcome-container'*/}
      <StepperBase
        {...stepperBaseProps}
        PaperProps={{ elevation: 0 }}
        StepperProps={{
          connector: <AruiStepConnector />,
          className: classes.transparent
        }}
        StepperButtonProps={{
          className: classes.button
        }}
        StepLabelProps={{
          StepIconComponent: empty ? StepEmptyIcon : StepIcon
        }}
        className={clsx(classes.stepper, classes.transparent)}
        label={stepperBaseLabel}
      />
    </div>
  )
}
