import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import {
  ItemsLayout as AruiItemsLayout,
  Menu
} from '@smartb/archetypes-ui-layout'
import { withA11y } from '@storybook/addon-a11y'
import { OneSectionMenuFull } from '../../../Docs/Variables/IconProfile'
import mdx from './ItemsLayout.mdx'

export default {
  title: 'Layout/ItemsLayout',
  decorators: [withKnobs, withA11y],
  parameters: {
    docs: {
      page: mdx
    }
  }
}

export const ItemsLayout = () => {
  const display = select('display', { list: 'list', grid: 'grid' }, 'list')
  return (
    <AruiItemsLayout
      style={{ display: 'block', margin: 'auto' }}
      menu={
        OneSectionMenuFull.items
          ? (OneSectionMenuFull.items[0] as Menu)
          : OneSectionMenuFull
      }
      display={display}
    />
  )
}

ItemsLayout.storyName = 'ItemsLayout'
