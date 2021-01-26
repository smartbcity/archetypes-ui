import React from 'react'
import {
  withKnobs,
  select,
  number,
  text,
  boolean
} from '@storybook/addon-knobs'
import {
  Card as AruiCard,
  ThemeContextProvider
} from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'
import { Typography } from '@material-ui/core'
import example from '../../assets/smartB.JPG'
import { myTheme } from '../../../Docs/Theme/Theme'
import mdx from './Card.mdx'

export default {
  title: 'Components/Card',
  decorators: [withKnobs, withA11y],
  parameters: {
    docs: {
      page: mdx
    }
  }
}

export const Card = () => {
  const logo = select(
    'logo',
    { Default: 'default', Document: 'document', None: 'none' },
    'default'
  )
  const logoSize = select(
    'logoSize',
    { Medium: 'medium', Small: 'small' },
    'medium'
  )
  const header = text('header', 'SmartB Card')
  const footer = text('footer', 'The footer')
  const children = text(
    'children',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  )
  const elevation = number('elevation', 1)
  const image = boolean('image', false)
  return (
    <ThemeContextProvider theme={myTheme}>
      <AruiCard
        header={header}
        logo={logo}
        style={{ width: '350px' }}
        elevation={elevation}
        logoSize={logoSize}
        footer={footer}
      >
        {image ? (
          <img src={example} style={{ width: '300px' }} alt='example' />
        ) : (
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            align='center'
          >
            {children}
          </Typography>
        )}
      </AruiCard>
    </ThemeContextProvider>
  )
}

Card.storyName = 'Card'
