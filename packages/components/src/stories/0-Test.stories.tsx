import React from 'react';
import { action } from '@storybook/addon-actions';
import Button2, { color } from '../ButtonTest';
import { withKnobs, select} from "@storybook/addon-knobs";

export default {
    title: 'Test',
    decorators: [withKnobs]
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
    return <Button2 disabled={false} onClick={action('clicked')} color={value as color}></Button2>
} 

ButtonTS.story = {
    parameters: {
        notes: 'This is a default button for an application',
    },
};
  