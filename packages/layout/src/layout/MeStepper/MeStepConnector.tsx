import {StepConnector, withStyles} from "@material-ui/core";

export const MeStepConnector = withStyles({
  alternativeLabel: {
    top: 20,
    left: "calc(-50% + 30px)",
    right: "calc(50% + 30px)"
  },
  active: {
    color: "#34625f",
    "& $line": {
      backgroundColor: "#34625f"
    }
  },
  completed: {
    "& $line": {
      backgroundColor: "#34625f"
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#34625f",
    borderRadius: 1
  }
})(StepConnector);
