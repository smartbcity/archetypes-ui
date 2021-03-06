import React from 'react'
import { Card as AruiCard, CardBasicProps } from './Card'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { styles, classes } from './types'

export default {
  title: 'Components/Deprecated/Card',
  component: AruiCard,
  argTypes: {
    children: {
      control: null
    },
    classes: {
      table: {
        type: {
          summary: 'CardClasses',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'CardStyles',
          detail: styles
        }
      }
    }
  }
} as Meta

const Template: Story<CardBasicProps> = (args: CardBasicProps) => (
  <AruiCard {...args}>{args.children}</AruiCard>
)

export const Card = Template.bind({})
Card.args = {
  children: 'A Card'
}
Card.storyName = 'Card'
