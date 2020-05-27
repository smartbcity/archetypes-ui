import React from "react";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  outlined: {
    minWidth: "136px",
    padding: "7px",
    fontSize: "0.75rem",
    color: "#4cb563",
    backgroundColor: "#ffffff",
    borderRadius: "11px",
    boxShadow: "0 5px 19px 0 rgba(0, 0, 0, 0.16)",
    border: "solid 1.1px #4cb563",
    "&:hover": {
      backgroundColor: "#4cb563",
      color: "#ffffff"
    }
  },
  contained: {
    minWidth: "136px",
    padding: "7px 0",
    fontSize: "0.75rem",
    borderRadius: "11px",
    boxShadow: "0 5px 19px 0 rgba(0, 0, 0, 0.16)",
    border: "solid 1.1px #4cb563",
    backgroundImage: "linear-gradient(226deg, #4cb563 181%, #6a9d36 -96%)",
    color: "#ffffff",
    "&:hover": {
      backgroundImage: "linear-gradient(226deg, #4cb563 181%, #6a9d36 -96%)",
      color: "#ffffff"
    }
  }
}));

export type Variant = "contained" | "outlined";

interface MeButtonProps {
  label: string;
  onClick: (event: React.ChangeEvent<{}>) => void;
  disabled?: boolean;
  variant?: Variant;
  style?: React.CSSProperties;
  className?: string;
}

export const MeButton = (props: MeButtonProps) => {
  const classes = useStyles();
  const {
    label,
    onClick,
    disabled = false,
    variant = "contained",
    style,
    className
  } = props;
  const variantClass =
    variant === "contained" ? classes.contained : classes.outlined;
  return (
    <Button
      style={style}
      disabled={disabled}
      className={`${variantClass} ${className}`}
      onClick={e => onClick(e)}>
      {label}
    </Button>
  );
};

