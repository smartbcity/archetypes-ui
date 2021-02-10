import React from 'react'
import { AppBar as AruiAppBar, AppBarProps } from './AppBar'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import defaultLogo from '../assets/impactcity-logo-2.png'

export default {
  title: 'Layout/AppBar',

  component: AruiAppBar
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
