import React from 'react';
import {withKnobs, text, boolean} from "@storybook/addon-knobs";
import {Button} from "@smartb/r2-react-components";
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Components|Button',
    decorators: [withKnobs, withA11y]
};

export const button = () => {

    const children = text("children", "Click Me");
    const disabled = boolean("disabled", false);
    const hoverEffect = boolean("hoverEffect", true)

    return (
    <Button
    disabled={disabled}
    hoverEffect={hoverEffect}
    style={{margin:"20px auto", display:"block", position:"relative"}}
    >
        {children}
    </Button>)
  }

