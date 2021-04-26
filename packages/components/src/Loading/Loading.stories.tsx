import React from 'react'
import { Loading as AruiLoading, LoadingBasicProps } from './Loading'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import smartb from '../assets/smartb.png'
import { styles, classes } from './types'

export default {
  title: 'Components/Loading',
  component: AruiLoading,
  argTypes: {
    classes: {
      table: {
        type: {
          summary: 'LoadingClasses',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'LoadingStyles',
          detail: styles
        }
      }
    }
  }
} as Meta

const Template: Story<LoadingBasicProps> = (args: LoadingBasicProps) => (
  <AruiLoading {...args} />
)

export const Loading = Template.bind({})
Loading.args = {
  icon: <img src={smartb} alt='smartb logo' />
}
