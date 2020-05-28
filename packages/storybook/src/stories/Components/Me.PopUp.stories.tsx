import React from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { MePopUp, Action } from '@smartb/archetypes-ui-components'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Components|Me/PopUp',
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
    <MePopUp open={open} title={title} actions={buttons} onClose={() => {}}>
      {children}
    </MePopUp>
  )
}
