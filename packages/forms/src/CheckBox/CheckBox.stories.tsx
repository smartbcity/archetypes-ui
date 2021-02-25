import React, { useState } from 'react'
import {CheckBox, CheckBoxProps} from './CheckBox'
import { Meta } from '@storybook/react'
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/CheckBox',
  component: CheckBox
} as Meta

export const CheckBoxStory: Story<CheckBoxProps> = () => {
  const [check, setCheck] = useState<boolean>(true)

  return (
    <CheckBox
      checked={check}
      text='CA Checkbox'
      onChange={() => {
        setCheck(!check)
      }}
    />
  )
}

CheckBoxStory.storyName = "CheckBox"
