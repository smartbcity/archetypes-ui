import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import {
  ThemeContextProvider,
  AutomateViewer as AruiAutomateViewer
} from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'
import { myTheme } from '../../../Docs/Theme/Theme'
import {getDidS2} from "@smartb/did-domain";
import PropTypes from 'prop-types';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Components/AutomateViewer',
  decorators: [withKnobs, withA11y],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta

export const AutomateViewer = () => {
  const automate = getDidS2();
  return (
    <ThemeContextProvider theme={myTheme}>
      <AruiAutomateViewer
        //@ts-ignore
        automate={automate}
        onSelect={(edges, node) => console.log(edges, node)}
      />
    </ThemeContextProvider>
  )
}

AutomateViewer.storyName = 'AutomateViewer'
AutomateViewer.propTypes = {
  automate: PropTypes.object.isRequired,
  onSelect: PropTypes.func
}