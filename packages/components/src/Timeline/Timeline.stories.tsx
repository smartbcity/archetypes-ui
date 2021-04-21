import React from 'react'
import { Timeline as AruiTimeline, TimelineBasicProps } from './Timeline'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { Paper, Typography } from '@material-ui/core'
import { Fastfood } from '@material-ui/icons'
import { styles, classes, TimeLineCell } from './types'

export default {
  title: 'Components/Timeline',
  component: AruiTimeline,
  argTypes: {
    lines: {
      table: {
        type: {
          summary: 'TimeLineCell[]',
          detail: TimeLineCell
        }
      },
      control: null
    },
    classes: {
      table: {
        type: {
          summary: 'TextFieldStyles',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'TextFieldStyles',
          detail: styles
        }
      }
    }
  }
} as Meta

const now = Date.now()
const lines = [
  {
    id: 'cell-1',
    content: (
      <Paper style={{ padding: '20px' }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Paper>
    ),
    startTime: new Date(now - 3600000 * 2).toLocaleTimeString(),
    endTime: new Date(now - 3600000 * 2 - 3600000 / 2).toLocaleTimeString(),
    endDate: 3600000 * 2 - 3600000 / 2,
    startDate: now - 3600000 * 2
  },
  {
    id: 'cell-2',
    content: (
      <Paper style={{ padding: '20px' }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Paper>
    ),
    startTime: new Date(now - 3600000).toLocaleTimeString(),
    startDate: now - 3600000,
    disabled: true
  },
  {
    id: 'cell-3',
    content: (
      <Paper style={{ padding: '20px' }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Paper>
    ),
    startTime: new Date(now - 3600000 / 2).toLocaleTimeString(),
    endTime: new Date(now + 3600000 / 2).toLocaleTimeString(),
    startDate: now - 3600000 / 2,
    endDate: now + 3600000 / 2,
    startDot: <Fastfood />
  },
  {
    id: 'cell-4',
    content: (
      <Paper style={{ padding: '20px' }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Paper>
    ),
    startTime: new Date(now + 3600000 * 2).toLocaleTimeString(),
    startDate: now + 3600000 * 2,
    disabled: true
  }
]

const Template: Story<TimelineBasicProps> = (args: TimelineBasicProps) => {
  return <AruiTimeline {...args}></AruiTimeline>
}

const Template2: Story = () => {
  return <AruiTimeline lines={lines} passedTimeLine></AruiTimeline>
}

export const Timeline = Template.bind({})

export const passedTimeLine = Template2.bind({})

Timeline.args = {
  lines: lines
}

passedTimeLine.storyName = 'passed timeline'
