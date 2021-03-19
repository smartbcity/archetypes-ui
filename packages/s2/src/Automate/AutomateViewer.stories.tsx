import React from 'react'
import {
  AutomateViewer as AruiAutomateViewer,
  AutomateViewerBasicProps
} from './AutomateViewer'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { getDidS2 } from '@smartb/did-domain'

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
  automate: getDidS2()
}

AutomateViewer.storyName = 'AutomateViewer'
