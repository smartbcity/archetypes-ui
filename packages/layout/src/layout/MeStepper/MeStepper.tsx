import React, {CSSProperties} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import clsx from "clsx";
import {MeStepConnector} from "./MeStepConnector";
import {MeStepEmptyIcon, MeStepIcon} from "./MeStepIcon";
import { SBStepper, SBStepperProps, SBStepperLabel } from "../sbstepper";

const useStyles = makeStyles(() =>
  createStyles({
    transparent: {
      backgroundColor: "#ffffff",
      justifyContent: "center"
    },
    stepper: {
      "& .sb-stepper-content": {
        position: "relative",
        margin: 0
      },
      "& .sb-stepper-action": {
        position: "absolute",
        bottom: 10,
        right: 10
      }
    }
  })
);

export interface Props {
  stepperProps: SBStepperProps;
  stepperLabel: SBStepperLabel;
  empty?: boolean;
  style?: CSSProperties;
}

export const MeStepper = (props: Props) => {
  const {stepperProps, empty = false, stepperLabel} = props;
  const classes = useStyles();
  return (
    <div className="welcome-container">
      <SBStepper
        {...stepperProps}
        PaperProps={{elevation: 0}}
        StepperProps={{
          connector: <MeStepConnector />,
          className: classes.transparent
        }}
        StepperButtonProps={{
          color: "secondary"
        }}
        StepLabelProps={{
          StepIconComponent: empty ? MeStepEmptyIcon : MeStepIcon
        }}
        className={clsx(classes.stepper, classes.transparent)}
        label={stepperLabel}
      />
    </div>
  );
};

