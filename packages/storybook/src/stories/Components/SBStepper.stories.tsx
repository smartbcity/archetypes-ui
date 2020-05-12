import React, {useState, RefForwardingComponent, useImperativeHandle} from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';
import {SBStepper, SBStepperProps, StepDetails, OnNextHandles} from "@smartb/r2-react-layout";

export default {
    title: 'Layout|Stepper',
    decorators: [withKnobs]
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

export const Stepper = () => {
    const [step, setStep] = useState(0);
    const stepperProps: SBStepperProps = {
        activeStep: step,
        getSteps: steps,
        gotoStep: (newStep: number) => setStep(newStep),
        onFinish: action('finished'),
      };
    return (
    <SBStepper {...stepperProps}  />
    );
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

  