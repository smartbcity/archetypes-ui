import React from 'react'
import {
  MenuContainerBasicProps,
  MenuContainer as AruiMenuContainer
} from './MenuContainer'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import defaultLogo from '../assets/impactcity-logo-2.png'

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
      ),
      items: [
        {
          key: 'key2-key3',
          goto: () => {},
          label: 'Section 3',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            />
          )
        },
        {
          key: 'key2-key4',
          goto: () => {},
          label: 'Section 4',
          icon: (
            <img
              style={{ width: '60px', height: '60px' }}
              src={defaultLogo}
              alt='smart b'
            />
          )
        }
      ]
    },
    {
      key: 'key5',
      goto: () => {},
      label: 'Section 5',
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

MenuContainer.storyName = 'MenuContainer'
