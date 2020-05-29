import React from 'react'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { MeButton } from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Components|MeButton',
  decorators: [withKnobs, withA11y]
}

export const Button = () => {
  const children = text('children', 'Click Me')
  const disabled = boolean('disabled', false)
  const variant = select(
    'variant',
    { contained: 'contained', outlined: 'outlined' },
    'contained'
  )

  return (
    <MeButton
      disabled={disabled}
      style={{ margin: '20px auto', display: 'block', position: 'relative' }}
      variant={variant}
      label={children}
      onClick={() => {}}
    />
  )
}
