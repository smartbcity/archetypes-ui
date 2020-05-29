import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { SBPanelProfile, Menu } from '@smartb/archetypes-ui-layout'
import { withA11y } from '@storybook/addon-a11y'
import {
  MultipleSectionMenuFull,
  MultipleSectionMenu,
  MultipleSectionMenuWithoutIcon,
  OneSectionMenu,
  OneSectionMenuFull
} from '../../Docs/Variables/IconProfile'

export default {
  title: 'Layout|PanelProfile',
  decorators: [withKnobs, withA11y]
}

export const PanelProfile = () => {
  const variableSelection = select(
    'menu',
    {
      MultipleSectionMenuFull: 'MultipleSectionMenuFull',
      MultipleSectionMenu: 'MultipleSectionMenu',
      MultipleSectionMenuWithoutIcon: 'MultipleSectionMenuWithoutIcon',
      OneSectionMenu: 'OneSectionMenu',
      OneSectionMenuFull: 'OneSectionMenuFull'
    },
    'OneSectionMenu'
  )
  let menu
  if (variableSelection === 'MultipleSectionMenuFull')
    menu = MultipleSectionMenuFull
  if (variableSelection === 'MultipleSectionMenu') menu = MultipleSectionMenu
  if (variableSelection === 'MultipleSectionMenuWithoutIcon')
    menu = MultipleSectionMenuWithoutIcon
  if (variableSelection === 'OneSectionMenu') menu = OneSectionMenu
  if (variableSelection === 'OneSectionMenuFull') menu = OneSectionMenuFull
  return (
    <SBPanelProfile
      style={{ display: 'block', margin: 'auto' }}
      menu={menu as Menu}
    />
  )
}
