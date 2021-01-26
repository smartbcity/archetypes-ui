import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import {
  SBButton,
  ThemeContextProvider
} from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'
import { myTheme } from '../../../Docs/Theme/Theme'
import mdx from './SBButton.mdx'

export default {
  title: 'Components/SBButton',
  decorators: [withKnobs, withA11y],
  parameters: {
    docs: {
      page: mdx
    }
  }
}

export const Button = () => {
  const children = text('children', 'Click Me')
  const disabled = boolean('disabled', false)
  const hoverEffect = boolean('hoverEffect', true)
  return (
    <ThemeContextProvider theme={myTheme}>
      <SBButton
        disabled={disabled}
        hoverEffect={hoverEffect}
        style={{ margin: '20px auto', display: 'block', position: 'relative' }}
      >
        {children}
      </SBButton>
    </ThemeContextProvider>
  )
}

Button.storyName = 'SBButton'
