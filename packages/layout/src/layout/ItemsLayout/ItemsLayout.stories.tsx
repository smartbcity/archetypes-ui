import React from 'react'
import { ItemsLayout as AruiItemsLayout, ItemsLayoutProps } from './ItemsLayout'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import defaultLogo from '../assets/impactcity-logo-2.png'

export default {
  title: 'Layout/ItemsLayout',
  component: AruiItemsLayout
} as Meta

const Template: Story<ItemsLayoutProps> = (args: ItemsLayoutProps) => (
  <AruiItemsLayout {...args} />
)

export const ItemsLayout = Template.bind({})
ItemsLayout.args = {
  display: 'list',
  menu: {
    items: [
      {
        key: 'key1',
        goto: () => {},
        label: 'Section 1',
        icon: (
          <img
            style={{ width: '60px', height: '60px' }}
            src={defaultLogo}
            alt='smart b'
          />
        )
      },
      {
        key: 'key2',
        goto: () => {},
        label: 'Section 2',
        icon: (
          <img
            style={{ width: '60px', height: '60px' }}
            src={defaultLogo}
            alt='smart b'
          />
        )
      },
      {
        key: 'key3',
        goto: () => {},
        label: 'Section 3',
        icon: (
          <img
            style={{ width: '60px', height: '60px' }}
            src={defaultLogo}
            alt='smart b'
          />
        )
      }
    ]
  }
}
