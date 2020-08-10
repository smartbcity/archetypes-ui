import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import {
  FilesPanel as AruiFilesPanel,
  FolderItem,
  ThemeContextProvider
} from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'
import { myTheme } from '../../../Docs/Theme/Theme'

export default {
  title: 'Components|FilesPanel',
  decorators: [withKnobs, withA11y]
}

export const FilesPanel = () => {
  const children: FolderItem = {
    type: 'folder',
    label: 'base',
    key: 'base',
    items: [
      {
        type: 'folder',
        label: 'dossier',
        key: 'dossier',
        onClick: () => console.log('folder')
      },
      {
        type: 'file',
        label: 'myFile',
        key: 'myFile',
        src: 'https://pic.clubic.com/v1/images/1730786/raw',
        onClick: () => console.log('file')
      }
    ]
  }
  return (
    <ThemeContextProvider theme={myTheme}>
      <AruiFilesPanel folder={children} />
    </ThemeContextProvider>
  )
}
