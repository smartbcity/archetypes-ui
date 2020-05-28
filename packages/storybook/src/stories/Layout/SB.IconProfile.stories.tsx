import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import { SBIconProfile, Menu } from '@smartb/archetypes-ui-layout'
import { withA11y } from '@storybook/addon-a11y'
import {
  MultipleSectionMenuFull,
  MultipleSectionMenu,
  MultipleSectionMenuWithoutIcon,
  OneSectionMenu,
  OneSectionMenuFull
} from '../../Docs/Variables/IconProfile'

export default {
  title: 'Layout|SB/IconProfile',
  decorators: [withKnobs, withA11y]
}

export const IconProfile = () => {
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
  const display = select('display', { list: 'list', grid: 'grid' }, 'list')
  return (
    <SBIconProfile
      style={{ display: 'block', margin: 'auto' }}
      menu={menu as Menu}
      display={display}
    />
  )
}
