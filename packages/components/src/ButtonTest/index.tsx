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

export interface buttonProps {
    disabled?: boolean;
    onClick: () => void;
    color?: color;
}

const ButtonTS = (props: buttonProps) => {
    const {disabled = false, onClick, color = "yellow"} = props;
    const classes = useStyles();
    return (
        <Button className={`${classes.Button} ${color === "blue" ? classes.blue : color === "red" ? classes.red : classes.yellow}`} disabled={disabled} onClick={onClick}>
            Je suis un test
        </Button>
    )
}

export default ButtonTS;
