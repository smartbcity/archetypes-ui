import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    Button : {
        background: '#EDBA27',
        color: '#343434',
        transition: '0.2s',
        borderRadius:'0px',
        fontSize:'15px',
        width:'200px',
        '&:hover': {
            background: "#EDBA27"
        }
    }
  }));

const JSButton = ({disabled, onClick}) => {
    const classes = useStyles();
    return (
        <Button className={classes.Button} disabled={disabled} onClick={onClick}>
            Je suis un test
        </Button>
    )
}

export default JSButton;
