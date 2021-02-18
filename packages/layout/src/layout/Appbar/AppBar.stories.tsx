import React from 'react'
import { AppBar as AruiAppBar, AppBarProps } from './AppBar'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import defaultLogo from '../assets/impactcity-logo-2.png'
import { styles, classes } from './types'
import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks'

export default {
  title: 'Layout/AppBar',
  component: AruiAppBar,
  parameters: {
    docs: {
      page: () => (
        <>
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    }
  },
  argTypes: {
    classes: {
      table: {
        type: {
          summary: 'AppBarClasses',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'AppBarStyles',
          detail: styles
        }
      }
    }
  }
} as Meta

const Template: Story<AppBarProps> = (args: AppBarProps) => (
  <AruiAppBar {...args}></AruiAppBar>
)

export const AppBar = Template.bind({})
AppBar.args = {
  logo: defaultLogo,
  onDrawerOpen: () => {},
  content: 'Some content',
  title: 'Title',
  profiles: 'Profile'
}
AppBar.storyName = 'AppBar'
