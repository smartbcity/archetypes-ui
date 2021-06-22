import React from 'react'
import { Panel as AruiPanel, PanelBasicProps } from './Panel'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { styles, classes } from './types'

export default {
  title: 'Components/Deprecated/Panel',
  component: AruiPanel,
  argTypes: {
    classes: {
      table: {
        type: {
          summary: 'PanelClasses',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'PanelStyles',
          detail: styles
        }
      }
    }
  }
} as Meta

const Template: Story<PanelBasicProps> = (args: PanelBasicProps) => (
  <AruiPanel {...args}></AruiPanel>
)

export const Panel = Template.bind({})
Panel.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n' +
    'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n' +
    'minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n' +
    'aliquip ex ea commodo consequat.'
}
