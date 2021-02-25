import React from 'react'
import clsx from 'clsx'
import { StepConnector } from './StepConnector'
import { StepEmptyIcon, StepIcon } from './StepIcon'
import {
  MuiStepperWrapper,
  MuiStepperWrapperProps,
  MuiStepperWrapperLabel
} from './MuiStepperWrapper'
import { Theme, useTheme } from '@smartb/archetypes-ui-components'
import { lowLevelStyles } from '../Types'

const useStyles = (theme: Theme) =>
  lowLevelStyles({
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

export interface StepperProps {
  /**
   * The props of the stepperBase
   */
  muiStepperWrapperProps: MuiStepperWrapperProps
  /**
   * The stepperBase label
   */
  muiStepperWrapperLabel: MuiStepperWrapperLabel
  /**
   * Define if the icon will be displayed or not
   */
  empty?: boolean
}

export const Stepper = (props: StepperProps) => {
  const {
    muiStepperWrapperProps,
    empty = false,
    muiStepperWrapperLabel
  } = props
  const theme = useTheme()
  const classes = useStyles(theme)()
  const AruiStepConnector = StepConnector(theme)
  return (
    <div className='AruiStepper-root'>
      {/* old className 'welcome-container' */}
      <MuiStepperWrapper
        {...muiStepperWrapperProps}
        PaperProps={{ elevation: 0 }}
        StepperProps={{
          connector: <AruiStepConnector />,
          className: clsx(classes.stepper, classes.transparent)
        }}
        StepperButtonProps={{
          className: classes.button
        }}
        StepLabelProps={{
          StepIconComponent: empty ? StepEmptyIcon : StepIcon
        }}
        label={muiStepperWrapperLabel}
      />
    </div>
  )
}