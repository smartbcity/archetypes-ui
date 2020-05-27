import React from 'react';
import {withKnobs, select, number, text, boolean} from "@storybook/addon-knobs";
import {SBCard} from "@smartb/r2-react-components";
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '@material-ui/core';
import example from '../assets/smartB.JPG';

export default {
    title: 'Components|Card',
    decorators: [withKnobs, withA11y]
};

export const Card = () => {
    const logo = select("logo", {Default: 'default', Document: 'document', None: 'none'}, 'default');
    const logoSize = select("logoSize", {Medium: 'medium', Small: 'small'}, 'medium');
    const header = text("header", "SmartB Card");
    const footer = text("footer", "The footer");
    const children = text('children', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    const elevation = number("elevation",1);
    const image = boolean('image', false);
    return (<SBCard
        header={header}
        logo={logo}
        style={{width:"350px"}}
        elevation={elevation}
        logoSize={logoSize}
        footer={footer}
        >
            {image ?
            <img src={example} style={{width:"300px"}} alt="example"/>
            :
            <Typography variant="body2" color="textSecondary" component="p" align="center">
                {children}
            </Typography>   
            }
        </SBCard>)
}
