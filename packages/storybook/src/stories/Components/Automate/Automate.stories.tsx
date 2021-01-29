import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import {
  ThemeContextProvider,
  AutomateViewer as AruiAutomateViewer
} from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'
import { myTheme } from '../../../Docs/Theme/Theme'
import { getDidS2 } from "@smartb/did-domain";
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
import stringifyObject from 'stringify-object'

export default {
  title: 'Components/AutomateViewer',
  decorators: [withKnobs, withA11y],
  argTypes: {
    automate: {
      description: "The automate we want to view",
      table: {
        type: { 
            summary: 'An automate example', 
            detail: stringifyObject(getDidS2(),{indent: '  '})
        },
      },
      control: {
        type: null,
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title >Test </Title>
          <Subtitle >SubTest</Subtitle>
          <Description >Description test</Description>
          <Primary name="name test">Primary test</Primary>
          <ArgsTable story={PRIMARY_STORY} showComponent />
          <Stories includePrimary />
        </>
      ),
      source: {
        type: 'code'
      }
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
AutomateViewer.parameters = {
  docs: {
    source: {
      code: `<AruiAutomateViewer
  //@ts-ignore
  automate={automate}
  onSelect={(edges, node) => console.log(edges, node)}
/>`,
    },
  },
};