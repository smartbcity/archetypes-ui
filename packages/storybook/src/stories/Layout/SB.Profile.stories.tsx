import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { SBProfile, SimpleMenuItem } from '@smartb/archetypes-ui-layout'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Layout|SB/Profile',
  decorators: [withKnobs, withA11y]
}

export const Profile = () => {
  const profileMenu: SimpleMenuItem[] = [
    {
      key: 'preference',
      goto: action('clicked on preference'),
      label: 'preferences'
    },
    {
      key: 'logout',
      goto: action('clicked on logout'),
      label: 'logout'
    }
  ]
  return <SBProfile menu={profileMenu} />
}
