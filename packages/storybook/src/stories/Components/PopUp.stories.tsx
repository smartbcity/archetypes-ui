import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import {
  PopUp as AruiPopUp,
  Action,
  ThemeContextProvider
} from '@smartb/archetypes-ui-components'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { myTheme } from '../../Docs/Theme/Theme'

export default {
  title: 'Components|PopUp',
  decorators: [withKnobs, withA11y]
}

export const PopUp = () => {
  const title = text('title', 'Title !')
  const children = text('children', 'Body !')
  const open = boolean('open', true)
  const buttons: Action[] = [
    {
      label: 'annuler',
      handler: action('clicked on annuler'),
      variant: 'outlined'
    },
    {
      label: 'continuer',
      handler: action('clicked on continuer'),
      variant: 'outlined'
    }
  ]
  return (
    <ThemeContextProvider theme={myTheme}>
      <AruiPopUp open={open} title={title} actions={buttons} onClose={() => {}}>
        {children}
      </AruiPopUp>
    </ThemeContextProvider>
  )
}
