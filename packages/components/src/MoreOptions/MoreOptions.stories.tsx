import React from 'react'
import { MoreOptions as AruiMoreOptions, MoreOptionsBasicProps } from './MoreOptions'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { styles, classes } from './docs'

export default {
  title: 'Components/MoreOptions',
  component: AruiMoreOptions,
  argTypes: {
    classes: {
      table: {
        type: {
          summary: 'MoreOptionsClasses',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'MoreOptionsStyles',
          detail: styles
        }
      }
    }
  }
} as Meta;


const options = [
  {
    key: 'Option 1',
    label: 'Option 1',
    goto: () => { }
  },
  {
    key: 'Option 2',
    label: 'Option 2',
    goto: () => { }
  },
  {
    key: 'Option 3',
    label: 'Option 3',
    goto: () => { }
  }
]

export const MoreOptions: Story<MoreOptionsBasicProps> = (args: MoreOptionsBasicProps) => {
  return (
    <AruiMoreOptions {...args} />
  )
}

MoreOptions.args = {
  options: options
}

MoreOptions.storyName = "MoreOptions"
