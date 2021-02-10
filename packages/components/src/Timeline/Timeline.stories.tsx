import React from 'react'
import { Timeline as AruiTimeline, TimelineProps } from './Timeline'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { Paper, Typography } from '@material-ui/core'
import { Fastfood } from '@material-ui/icons'

export default {
  title: 'Components/Timeline',
  component: AruiTimeline
} as Meta

const Template: Story<TimelineProps> = (args: TimelineProps) => (
  <AruiTimeline {...args}></AruiTimeline>
)

export const Timeline = Template.bind({})

const now = Date.now()
Timeline.args = {
  align: 'alternate',
  lines: [
    {
      id: 'cell-1',
      content: (
        <Paper style={{ padding: '20px' }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
      id: 'cell-1',
      content: (
        <Paper style={{ padding: '20px' }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Paper>
      ),
      startTime: new Date(now - 3600000).toLocaleTimeString(),
      startDate: now - 3600000,
      disabled: true
    },
    {
      id: 'cell-1',
      content: (
        <Paper style={{ padding: '20px' }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
      id: 'cell-1',
      content: (
        <Paper style={{ padding: '20px' }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Paper>
      ),
      startTime: new Date(now + 3600000 * 2).toLocaleTimeString(),
      startDate: now + 3600000 * 2,
      disabled: true
    }
  ]
}
