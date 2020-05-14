import React from 'react';
import {withKnobs, text, select} from "@storybook/addon-knobs";
import {LayoutDivider as SBLayoutDvivider, Button} from "@smartb/r2-react-components";
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '@material-ui/core';

export default {
    title: 'Components|LayoutDivider',
    decorators: [withKnobs, withA11y]
};

export const LayoutDivider = () => {

    const dividerText = text("dividerText", "Or");
    const dividerDirection = select("dividerDirection", {horizontal: 'horizontal', vertical: 'vertical'}, 'horizontal');

    return (
        <SBLayoutDvivider dividerText={dividerText} dividerDirection={dividerDirection} style={{width:"300px"}}>
        <>
            <Typography variant="body2" color="textSecondary" component="p" align="center">
                connect with your identity wallet
            </Typography>
            <Button style={{margin:"20px auto", display:"block", position:"relative"}}>Yes</Button>
        </>
        <>
            <Typography variant="body2" color="textSecondary" component="p" align="center">
                connect with the mobile application
            </Typography>
            <Button style={{margin:"20px auto", display:"block", position:"relative"}}>Yes</Button>
        </>
    </SBLayoutDvivider>)
  }