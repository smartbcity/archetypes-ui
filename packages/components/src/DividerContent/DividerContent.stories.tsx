import React from 'react'
import {
  DividerContent as AruiDividerContent,
  DividerContentBasicProps
} from './DividerContent'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { styles, classes } from './types'

export default {
  title: 'Components/DividerContent',
  component: AruiDividerContent,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode | React.ReactNode[]'
        }
      }
    },
    classes: {
      table: {
        type: {
          summary: 'DivderContentClasses',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'DividerContentStyles',
          detail: styles
        }
      }
    }
  }
} as Meta

const Template: Story<DividerContentBasicProps> = (
  args: DividerContentBasicProps
) => (
  <AruiDividerContent {...args}>
    <>first</>
    <>second</>
  </AruiDividerContent>
)

export const DividerContent = Template.bind({})
DividerContent.args = {}
DividerContent.storyName = 'DividerContent'
