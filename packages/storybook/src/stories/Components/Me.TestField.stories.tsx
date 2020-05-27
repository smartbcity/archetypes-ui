import React, {useState} from 'react';
import {withKnobs, text, boolean} from "@storybook/addon-knobs";
import {MeTestField} from "@smartb/r2-react-components";
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Components|Me/TestField',
    decorators: [withKnobs, withA11y]
};

export const PopUp = () => {
    const [value, setValue] = useState('Basile');
    const label = text("label", "Prénom");
    const errorMessage = text("errorMessage", "ce n'est pas bon");
    const isValid = boolean("isValid",true);
    const type = text("type", "text");
    const disabled = boolean("disabled",false);
    return (
    <div style={{width:"100px"}}>
    <MeTestField
    defaultValue={value}
    label={label}
    errorMessage={errorMessage}
    isValid={isValid}
    type={type}
    disabled={disabled}
    onChange={value => setValue(value)}
    /></div>)
}
