import React from 'react';
import {withKnobs, text, boolean} from "@storybook/addon-knobs";
import {SBButton} from "@smartb/r2-react-components";
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Components|SB/Button',
    decorators: [withKnobs, withA11y]
};

export const Button = () => {

    const children = text("children", "Click Me");
    const disabled = boolean("disabled", false);
    const hoverEffect = boolean("hoverEffect", true)

    return (
    <SBButton
    disabled={disabled}
    hoverEffect={hoverEffect}
    style={{margin:"20px auto", display:"block", position:"relative"}}
    >
        {children}
    </SBButton>)
  }

