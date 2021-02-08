import React from 'react'
import { Card as AruiCard, CardProps } from './Card'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/Card',
  component: AruiCard
} as Meta

const Template: Story<CardProps> = (args: CardProps) => (
  <AruiCard {...args}>{args.children}</AruiCard>
)

export const Card = Template.bind({})
Card.args = {
  children: 'A Card'
}
