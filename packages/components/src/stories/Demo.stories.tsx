import React from 'react';
// import { action } from '@storybook/addon-actions';
import CustomCard from '../Card'
import {withKnobs, boolean, text} from "@storybook/addon-knobs";
import {Typography} from '@material-ui/core';
import { createStyles, makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(() =>
  createStyles({
    text: {
        textAlign:"center"
    }
  }),
);

export default {
    title: 'Demo components',
    decorators: [withKnobs]
};

export const Card = () => {
    const classes = useStyles();
    const popUp = boolean("popUp", false);
    const header = text("header", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    const children: React.ReactNode[] = [<Typography className={classes.text} key={1} variant="body2" color="textSecondary" component="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </Typography>,<Typography className={classes.text} key={2} variant="body2" color="textSecondary" component="p">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </Typography>];
    const dividerText = text("dividerText", "Or");
    return <CustomCard popUp={popUp} header={header} dividerText={dividerText}>{children}</CustomCard>
} 
