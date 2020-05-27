import makeStyles from "@material-ui/core/styles/makeStyles";
import {StepIconProps} from "@material-ui/core";
import clsx from "clsx";
import React, { Fragment } from "react";

const useStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#cad4d4",
    zIndex: 1,
    color: "#fff",
    width: 40,
    height: 40,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  active: {
    backgroundColor: "#34625f",
    boxShadow: "#34625f"
  },
  completed: {
    backgroundColor: "#34625f",
    boxShadow: "#34625f"
  },
  activeIcon: {
    border: "2px solid rgb(82, 183, 119)",
    padding: "3px",
    borderRadius: "50%"
  }
});

export const MeStepIcon = (props: StepIconProps) => {
  const classes = useStepIconStyles();
  const {active, completed, icon} = props;
  return (
    <div className={clsx({[classes.activeIcon]: active})}>
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed
        })}>
        {icon}
      </div>
    </div>
  );
};

export const MeStepEmptyIcon = () => {
  return <Fragment></Fragment>;
};
