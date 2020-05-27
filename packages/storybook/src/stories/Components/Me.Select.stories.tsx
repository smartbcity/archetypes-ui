import React, { useState } from 'react';
import {withKnobs, text, boolean} from "@storybook/addon-knobs";
import {MeSelect, MeSelectItem} from "@smartb/r2-react-components";
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Components|Me/Select',
    decorators: [withKnobs, withA11y]
};

export const Select = () => {
    const [value, setValue] = useState("value1");
    const id = text("id", "select1");
    const label = text("label", "label");
    const disabled = boolean("disabled", false);
    const items: MeSelectItem[] = [{
        value: "value1",
        label:"item1"
    },{
        lalue: "value2",
        label:"item2"
    }]
    return (
    <MeSelect
    id={id}
    label={label}
    value={value}
    disabled={disabled}
    items={items}
    onChange={(event) => console.log(event.target.value)}
    />)
}
