import React from 'react'
import { Page as AruiPage, pageBasicProps } from './Page'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { styles, classes } from './types'

export default {
  title: 'Layout/Page',
  component: AruiPage,
  argTypes: {
    classes: {
      table: {
        type: {
          summary: 'PageClasses',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'PageStyles',
          detail: styles
        }
      }
    }
  }
} as Meta

const Template: Story<pageBasicProps> = (args: pageBasicProps) => (
  <AruiPage {...args} />
)

export const Page = Template.bind({})
Page.args = {
  children: (
    <div
      style={{ height: '120vh', width: '70vw', background: 'rgba(0,0,0,0.1)' }}
    >
      je suis la page
    </div>
  ),
  onGoBackClick: () => {},
  goBackLabel: 'Retour'
}

Page.storyName = 'Page'
