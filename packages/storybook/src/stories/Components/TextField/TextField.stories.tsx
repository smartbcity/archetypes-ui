import React, { useState } from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { TextField as AruiTextField } from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'
import mdx from './TextField.mdx'

export default {
  title: 'Components|TextField',
  decorators: [withKnobs, withA11y],
  parameters: {
    docs: {
      page: mdx
    }
  }
}

export const TextField = () => {
  const [value, setValue] = useState('Basile')
  const label = text('label', 'Prénom')
  const errorMessage = text('errorMessage', "ce n'est pas bon")
  const isValid = boolean('isValid', true)
  const type = text('type', 'text')
  const disabled = boolean('disabled', false)
  return (
    <div style={{ width: '100px' }}>
      <AruiTextField
        defaultValue={value}
        label={label}
        errorMessage={errorMessage}
        isValid={isValid}
        type={type}
        disabled={disabled}
        onChange={(value) => setValue(value)}
      />
    </div>
  )
}
