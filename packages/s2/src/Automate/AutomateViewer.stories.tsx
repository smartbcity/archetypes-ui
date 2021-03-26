import React from 'react'
import {
  AutomateViewer as AruiAutomateViewer,
  AutomateViewerBasicProps
} from './AutomateViewer'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'S2/AutomateViewer',
  component: AruiAutomateViewer
} as Meta

const Template: Story<AutomateViewerBasicProps> = (
  args: AutomateViewerBasicProps
) => {
  return <AruiAutomateViewer {...args}></AruiAutomateViewer>
}

export const AutomateViewer = Template.bind({})

AutomateViewer.args = {
  transitions: [
    {
      label: 'transition 1',
      from: 0,
      to: 1
    },
    {
      label: 'transition 2',
      from: 1,
      to: 1
    },
    {
      label: 'transition 3',
      from: 1,
      to: 1
    },
    {
      label: 'transition 4',
      from: 1,
      to: 2
    }
  ],
  style: { width: '100%', height: '500px' }
}

AutomateViewer.storyName = 'AutomateViewer'
