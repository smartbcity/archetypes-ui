import React, { RefForwardingComponent, useState, useImperativeHandle } from 'react';
import {withKnobs,} from "@storybook/addon-knobs";
import {MeStepper, SBStepperProps, StepDetails, OnNextHandles} from "@smartb/r2-react-layout";
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Layout|Me/Stepper',
    decorators: [withKnobs, withA11y]
};

const steps = (stepRef: React.RefObject<OnNextHandles>): StepDetails[] => {
    return  [
    {
      id: 0,
      label: `Step 0`,
      component: <BasicStepForward ref={stepRef} id={0}/>
    },
    {
    id: 1,
    label: `Step 1`,
    component: <BasicStepForward ref={stepRef} id={1}/>
    },
    {
    id: 2,
    label: `Step 2`,
    component: <BasicStepForward ref={stepRef} id={2}/>
    },{
    id: 3,
    label: `Step 3`,
    component: <BasicStepForward ref={stepRef} id={3}/>
    }]
  };

export const Select = () => {
    const [step, setStep] = useState(0);
    const stepperProps: SBStepperProps = {
        activeStep: step,
        getSteps: steps,
        gotoStep: (newStep: number) => setStep(newStep),
        onFinish: action('finished'),
      };
    return (
    <MeStepper
        stepperProps={stepperProps} 
        stepperLabel={{
            next: "next",
            back: "back",
            finish: "finish"
          }}
    />)
}

interface Props {
    id: number;
}

const BasicStep: RefForwardingComponent<OnNextHandles, Props> = (props: Props, ref) => {
    const {id} = props;
    useImperativeHandle(ref, () => ({
      onNext(): boolean {
        return true;
      }
    }));
  return (<p>Step {id}</p>)
  }
  
  const BasicStepForward = React.forwardRef(BasicStep);