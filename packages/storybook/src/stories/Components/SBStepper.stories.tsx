import React, {useState} from 'react';
import {withKnobs, text} from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {SBStepper, SBStepperProps, StepDetails, OnNextHandles} from "@smartb/r2-react-layout";
import Button from "@smartb/r2-react-components/src/Button";

export default {
    title: 'Layout|Stepper',
    decorators: [withKnobs]
};

export const Stepper = () => {
    const [step, setStep] = useState(0);
    const title = text('title', "SmartB Stepper" );
    const stepperProps: SBStepperProps = {
        activeStep: step,
        getSteps: (stepRef: React.RefObject<OnNextHandles>) => {
            return  [
            {
              id: 0,
              label: `Step 0`,
              component: <Button >go to 1</Button>
            },
            {
            id: 1,
            label: `Step 1`,
            component: <p>Step 1</p>
            },
            {
            id: 2,
            label: `Step 2`,
            component: <p>Step 2</p>
            },{
            id: 3,
            label: `Step 3`,
            component: <p>Step 3</p>
            }] as StepDetails[]
        },
        gotoStep: (newStep: number) => setStep(newStep),
        onFinish: action('finished')
      };
    return (
    <SBStepper stepperProps={stepperProps} stepperLabel={title} />
    );
}