import React from 'react';
import {action} from '@storybook/addon-actions';
import Button, {color} from '../../ButtonTest';
import {select, withKnobs} from "@storybook/addon-knobs";


export default {
    title: 'Components|Button',
    decorators: [withKnobs],
    component: Button
};

export const ButtonTS = () => {
    const label = 'Colors';
    const options = {
      Red: 'red',
      Blue: 'blue',
      Yellow: 'yellow',
    };
    const defaultValue = 'yellow';
    const groupId = 'GROUP-ID1';
    const value = select(label, options, defaultValue, groupId);
    return <Button disabled={false} onClick={action('clicked')} color={value as color}></Button>
}

// export { default as color } from './examples/Color';

// ButtonTS.story = {
//     parameters: {
//         notes: 'This is a default button for an application',
//     },
// };
//
