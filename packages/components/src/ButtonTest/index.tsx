import React from 'react';
import {Button} from '@material-ui/core';
import { createStyles, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    Button : {
        color: '#343434',
        transition: '0.2s',
        borderRadius:'0px',
        fontSize:'15px',
        width:'200px'
    },
    blue: {
        background:"blue"
    },
    red: {
        background: "red"
    },
    yellow: {
        background: '#EDBA27',
    }
  }),
);

export type color = "blue" | "red" | "yellow";

export interface ButtonProps {
    disabled?: boolean;
    onClick: () => void;
    color?: color;
    label?: string
}

const ButtonTS = (props: ButtonProps) => {
    const {disabled = false, onClick, color = "yellow", label = "Je suis un test"} = props;
    const classes = useStyles();
    return (
        <Button className={`${classes.Button} ${color === "blue" ? classes.blue : color === "red" ? classes.red : classes.yellow}`} disabled={disabled} onClick={onClick}>
          {label}
        </Button>
    )
}

export default ButtonTS;
