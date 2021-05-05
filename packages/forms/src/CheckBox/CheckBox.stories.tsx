import React, { useState } from 'react'
import {CheckBox, CheckBoxBasicProps} from './CheckBox'
import { Meta } from '@storybook/react'
import {Story} from "@storybook/react/types-6-0";
import {CheckBoxClasses, CheckBoxStyles} from './docs'
import { Box } from '@material-ui/core';

export default {
  title: 'Forms/CheckBox',
  component: CheckBox,
  argTypes: {
    classes: {
      table: {
        type: {
          summary: 'CheckBoxClasses',
          detail: CheckBoxClasses
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'CheckBoxStyles',
          detail: CheckBoxStyles
        }
      }
    }
  }
} as Meta

export const CheckBoxStory: Story<CheckBoxBasicProps> = (args: CheckBoxBasicProps) => {

  return (
    <CheckBox
      {...args}
    />
  )
}

export const CheckBoxStates: Story<CheckBoxBasicProps> = () => {

  const [checked, setChecked] = useState(false)

  return (
    <Box display="flex" justifyContent="space-around" alignItems="center">
      <CheckBox
        label="Normal"
        checked={checked}
        onChange={()=> setChecked(!checked)}
      />
       <CheckBox
        label="Disabled"
        checked={checked}
        onChange={()=> setChecked(!checked)}
        disabled
      />
    </Box>
  )
}

CheckBoxStory.args = {
  label: 'CA Checkbox'
}

CheckBoxStory.storyName = "CheckBox"
CheckBoxStates.storyName = "All the states of the CheckBox"
