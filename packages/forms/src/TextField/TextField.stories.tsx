import { Meta } from '@storybook/react'
import React, { useCallback, useState } from 'react'
import {TextField, TextFieldProps} from './TextField'
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/TextField',
  component: TextField
} as Meta

export const TextFieldStory: Story<TextFieldProps> = () => {
  const [textValue, setTextValue] = useState<string | number | undefined>(
    undefined
  )

  const handleTextChange = useCallback((text: string | undefined | number) => {
    setTextValue(text)
  }, [])

  return (
    <TextField
      value={textValue}
      placeHolder={'Type something here...'}
      onChange={handleTextChange}
    />
  )
}

TextFieldStory.storyName = "TextField"
