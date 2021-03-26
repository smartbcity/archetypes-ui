import React from 'react'
import {
  MenuContainerBasicProps,
  MenuContainer as AruiMenuContainer
} from './MenuContainer'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Layout/MenuContainer',
  component: AruiMenuContainer
} as Meta

const Template: Story<MenuContainerBasicProps> = (
  args: MenuContainerBasicProps
) => <AruiMenuContainer {...args} />

export const MenuContainer = Template.bind({})
MenuContainer.args = {
  menu: [
    {
      key: 'key1',
      goto: () => {},
      label: 'Section 1'
    },
    {
      key: 'key2',
      goto: () => {},
      label: 'Section 2',
      isSelected: true,
      items: [
        {
          key: 'key2-key3',
          goto: () => {},
          label: 'Section 3',
          isSelected: true
        },
        {
          key: 'key2-key4',
          goto: () => {},
          label: 'Section 4'
        }
      ]
    },
    {
      key: 'key5',
      goto: () => {},
      label: 'Section 5'
    }
  ]
}

MenuContainer.storyName = 'MenuContainer'
