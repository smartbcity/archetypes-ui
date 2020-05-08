import React, {useRef} from "react";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import Stepper, {StepperProps} from "@material-ui/core/Stepper";
import Step, {StepProps} from "@material-ui/core/Step";
import StepLabel, {StepLabelProps} from "@material-ui/core/StepLabel";
import Button, {ButtonProps} from "@material-ui/core/Button";
import {Paper, PaperProps} from "@material-ui/core";
import clsx from 'clsx';

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
    onNext(): boolean;
}

export interface StepDetails {
    id: number;
    label: string;
    component: React.ReactNode;
}

export interface SBStepperLabel {
    next: string;
    back: string;
    finish: string;
}

const englishLabel = {
    next: 'Next',
    back: 'Back',
    finish: 'Finish'
} as SBStepperLabel;

export interface SBStepperProps {
    activeStep: number;
    getSteps: (stepRef: React.RefObject<OnNextHandles>) => StepDetails[];
    gotoStep: (stepNumber: number) => void;
    onFinish: () => void;
    className?: string;
    PaperProps?: Partial<PaperProps>;
    StepperProps?: Partial<StepperProps>;
    StepperButtonProps?: Partial<ButtonProps>;
    StepProps?: Partial<StepProps>;
    StepLabelProps?: Partial<StepLabelProps>;
    label?: SBStepperLabel
}

const SBStepper = (props: SBStepperProps) => {
    const {activeStep, gotoStep, onFinish, getSteps, className, PaperProps, StepperProps, StepProps, StepLabelProps, StepperButtonProps, label = englishLabel} = props;
    const classes = useStyles();
    const stepRef = useRef<OnNextHandles>(null);
    const steps = getSteps(stepRef);
    const handleNext = () => {
        const isOk = stepRef.current && stepRef.current.onNext();
        isOk && gotoStep(activeStep + 1);
    };

    const handleTerminate = () => {
        const isOk = stepRef.current && stepRef.current.onNext();
        isOk && onFinish();
    };

    const getStepContent = (stepIndex: number, steps: StepDetails[]) => {
        return stepIndex >= steps.length
            ? steps[0].component
            : steps[stepIndex].component;
    };

    const handleBack = () => {
        gotoStep(activeStep - 1);
    };

    const activeButtonProps: Partial<ButtonProps> = {
        ...StepperButtonProps,
        variant: "contained",
    };
    return (
        <Paper className={clsx("sb-stepper", className)} {...PaperProps}>
            <Stepper activeStep={activeStep} alternativeLabel {...StepperProps}>
                {steps.map(step => (
                    <Step key={step.id} {...StepProps}>
                        <StepLabel {...StepLabelProps}>{step.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Paper elevation={0} className={clsx(classes.stepper, "sb-stepper-content")}>
                {getStepContent(activeStep, steps)}
                <div className={clsx(classes.actions, "sb-stepper-action")}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                    >
                        {label.back}
                    </Button>
                    {activeStep === steps.length - 1 ? (
                        <Button {...activeButtonProps}
                                onClick={handleTerminate}>{label.finish}</Button>
                    ) : (
                        <Button {...activeButtonProps}  onClick={handleNext}>
                            {label.next}
                        </Button>
                    )}
                </div>
            </Paper>
        </Paper>
    );
};

export default SBStepper;
