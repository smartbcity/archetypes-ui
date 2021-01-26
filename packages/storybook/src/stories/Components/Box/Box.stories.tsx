import React from 'react'
import { withKnobs, select, number, text } from '@storybook/addon-knobs'
import {
  Box as AruiBox,
  ThemeContextProvider
} from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'
import { Typography } from '@material-ui/core'
import { myTheme } from '../../../Docs/Theme/Theme'
import mdx from './Box.mdx'

export default {
  title: 'Components/Box',
  decorators: [withKnobs, withA11y],
  parameters: {
    docs: {
      page: mdx
    }
  }
}

export const Box = () => {
  const logo = select(
    'logo',
    { Default: 'default', Document: 'document', None: 'none' },
    'default'
  )
  const logoSize = select(
    'logoSize',
    { Medium: 'medium', Small: 'small' },
    'small'
  )
  const children = text(
    'children',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  )
  const elevation = number('elevation', 1)
  return (
    <ThemeContextProvider theme={myTheme}>
      <AruiBox
        logo={logo}
        style={{ width: '350px' }}
        elevation={elevation}
        logoSize={logoSize}
      >
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          align='center'
          style={{ margin: '20px 40px' }}
        >
          {children}
        </Typography>
      </AruiBox>
    </ThemeContextProvider>
  )
}

Box.storyName = 'Box'