import React from 'react'
import { TabsMenu as AruiTabsMenu, TabsMenuProps } from './TabsMenu'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/TabsMenu',
  component: AruiTabsMenu
} as Meta

const Template: Story<TabsMenuProps> = (args: TabsMenuProps) => (
  <AruiTabsMenu {...args} />
)

export const TabsMenu = Template.bind({})
TabsMenu.args = {
  variant: 'fullWidth',
  tabs: [{ label: 'section1' }, { label: 'section2' }],
  children: ['Content 1', 'Content 2']
}
