import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { TabsMenu as AruiTabsMenu } from '@smartb/archetypes-ui-layout'
import { withA11y } from '@storybook/addon-a11y'
import mdx from './TabsMenu.mdx'
import { Typography } from '@material-ui/core'

export default {
  title: 'Layout/TabsMenu',
  decorators: [withKnobs, withA11y],
  parameters: {
    docs: {
      page: mdx
    }
  }
}

export const TabsMenu = () => {
  const variant = select(
    'variant',
    { fullWidth: 'fullWidth', fixedWidth: 'fixedWidth' },
    'fullWidth'
  )
  const children1 = text('section1', 'section1')
  const children2 = text('section2', 'section2')
  const tabs = [{ label: 'section1' }, { label: 'section2' }]
  return (
    <AruiTabsMenu
      style={{ display: 'block', margin: 'auto' }}
      variant={variant}
      tabs={tabs}
    >
      <Typography variant='body2' color='textSecondary' component='p'>
        {children1}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        {children2}
      </Typography>
    </AruiTabsMenu>
  )
}

TabsMenu.storyName = 'TabsMenu'
