import React from 'react'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import { Timeline as AruiTimeline, TimeLineCell, TimelineProps } from '@smartb/archetypes-ui-layout'
import { withA11y } from '@storybook/addon-a11y'
import { Paper, Typography } from '@material-ui/core'
import { Fastfood } from '@material-ui/icons'
import { ThemeContextProvider } from '@smartb/archetypes-ui-components'
import { myTheme } from '../../../Docs/Theme/Theme'
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Layout/Timeline',
  decorators: [withKnobs, withA11y],
} as Meta

const now = Date.now()
const cells: TimeLineCell[] = [
  {
    id: "cell-1",
    content: (<Paper style={{ padding: "20px" }}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </Typography>
    </Paper>),
    startTime: new Date(now - (3600000 * 2)).toLocaleTimeString(),
    endTime: new Date(now - (3600000 * 2) - (3600000 / 2)).toLocaleTimeString(),
    endDate: (3600000 * 2) - (3600000 / 2),
    startDate: now - (3600000 * 2),
  },
  {
    id: "cell-1",
    content: (<Paper style={{ padding: "20px" }}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </Typography>
    </Paper>),
    startTime: new Date(now - 3600000).toLocaleTimeString(),
    startDate: now - 3600000,
    disabled: true
  },
  {
    id: "cell-1",
    content: (<Paper style={{ padding: "20px" }}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </Typography>
    </Paper>),
    startTime: new Date(now - (3600000 / 2)).toLocaleTimeString(),
    endTime: new Date(now + (3600000 / 2)).toLocaleTimeString(),
    startDate: now - (3600000 / 2),
    endDate: now + (3600000 / 2),
    startDot: (<Fastfood />)
  }, {
    id: "cell-1",
    content: (<Paper style={{ padding: "20px" }}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </Typography>
    </Paper>),
    startTime: new Date(now + (3600000 * 2)).toLocaleTimeString(),
    startDate: now + (3600000 * 2),
    disabled: true
  }
]

const Template: Story<TimelineProps> = (args) => (
  <ThemeContextProvider theme={myTheme}>
    <AruiTimeline
      {...args}
    >
    </AruiTimeline>
  </ThemeContextProvider>
);

export const Timeline = Template.bind({});
Timeline.args = {
  lines: cells,
  align: "alternate"
};
Timeline.storyName = 'Timeline'
