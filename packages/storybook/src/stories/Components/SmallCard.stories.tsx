import React from 'react';
import {withKnobs, select, number, text} from "@storybook/addon-knobs";
import {SmallCard as SBSmallCard} from "@smartb/r2-react-components";
import { withA11y } from '@storybook/addon-a11y';
import { Typography } from '@material-ui/core';

export default {
    title: 'Components|SmallCard',
    decorators: [withKnobs, withA11y]
};

export const SmallCard = () => {
    const logo = select("logo", {Default: 'default', Document: 'document'}, 'default');
    const logoSize = select("logoSize", {Medium: 'medium', Small: 'small'}, 'medium');
    const header = text("header", "SmartB SmallCard");
    const children = text('children', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    const elevation = number("elevation",1);
    return (<SBSmallCard 
        header={header}
        logo={logo}
        elevation={elevation}
        style={{width:"300px"}}
        logoSize={logoSize}
        >
            <Typography variant="body2" color="textSecondary" component="p" align="center">
                {children}
            </Typography>   
        </SBSmallCard>)
}