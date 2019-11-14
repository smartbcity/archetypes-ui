import React, {useRef} from "react";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90%",
      height: "90%",
      maxWidth: "90%"
    },
    stepper: {
      margin: theme.spacing(5)
    },
    actions: {
      marginTop: theme.spacing(5)
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
);

export interface OnNextHandles {
  onNext(): void;
}

export interface StepDetails {
  id: number;
  label: string;
  component: React.ReactNode;
}

export interface Props {
  activeStep: number;
  getSteps: (stepRef: React.RefObject<OnNextHandles>) => StepDetails[];
  gotoStep: (stepNumber: number) => void;
  onFinish: () => void;
}

const SBStepper = ({activeStep, gotoStep, onFinish, getSteps}: Props) => {
  const classes = useStyles();
  const stepRef = useRef<OnNextHandles>(null);
  const steps = getSteps(stepRef);

  const handleNext = () => {
    stepRef.current && stepRef.current.onNext();
    gotoStep(activeStep + 1);
  };

  const getStepContent = (stepIndex: number, steps: StepDetails[]) => {
    return stepIndex >= steps.length
      ? steps[0].component
      : steps[stepIndex].component;
  };

  const handleBack = () => {
    gotoStep(activeStep - 1);
  };
  return (
    <Paper>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(step => (
          <Step key={step.id}>
            <StepLabel>{step.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper elevation={0} className={classes.stepper}>
        {getStepContent(activeStep, steps)}
        <div className={classes.actions}>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}>
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button onClick={() => onFinish()}>Finish</Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          )}
        </div>
      </Paper>
    </Paper>
  );
};

export default SBStepper;
