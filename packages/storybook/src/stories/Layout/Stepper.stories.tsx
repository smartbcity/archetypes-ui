import React, {
  RefForwardingComponent,
  useState,
  useImperativeHandle
} from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import {
  Stepper as SBStepper,
  StepperBaseProps,
  StepDetails,
  OnNextHandles
} from '@smartb/archetypes-ui-layout'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { ThemeContextProvider } from '@smartb/archetypes-ui-components'
import { myTheme } from '../../Docs/Theme/Theme'

export default {
  title: 'Layout|Stepper',
  decorators: [withKnobs, withA11y]
}

const steps = (stepRef: React.RefObject<OnNextHandles>): StepDetails[] => {
  return [
    {
      id: 0,
      label: `Step 0`,
      component: <BasicStepForward ref={stepRef} id={0} />
    },
    {
      id: 1,
      label: `Step 1`,
      component: <BasicStepForward ref={stepRef} id={1} />
    },
    {
      id: 2,
      label: `Step 2`,
      component: <BasicStepForward ref={stepRef} id={2} />
    },
    {
      id: 3,
      label: `Step 3`,
      component: <BasicStepForward ref={stepRef} id={3} />
    }
  ]
}

export const Stepper = () => {
  const [step, setStep] = useState(0)
  const stepperProps: StepperBaseProps = {
    activeStep: step,
    getSteps: steps,
    gotoStep: (newStep: number) => setStep(newStep),
    onFinish: action('finished')
  }
  return (
    <ThemeContextProvider theme={myTheme}>
      <SBStepper
        stepperBaseProps={stepperProps}
        stepperBaseLabel={{
          next: 'next',
          back: 'back',
          finish: 'finish'
        }}
      />
    </ThemeContextProvider>
  )
}

interface Props {
  id: number
}

const BasicStep: RefForwardingComponent<OnNextHandles, Props> = (
  props: Props,
  ref
) => {
  const { id } = props
  useImperativeHandle(ref, () => ({
    onNext(): boolean {
      return true
    }
  }))
  return <p>Step {id}</p>
}

const BasicStepForward = React.forwardRef(BasicStep)
