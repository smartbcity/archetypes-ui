import React, { useState } from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import {
  PdfViewer as AruiPdfViewer,
  ThemeContextProvider
} from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'
import { myTheme } from '../../../Docs/Theme/Theme'
import pdf from '../../assets/test.pdf'
import { createStyles, makeStyles } from '@material-ui/core'

export default {
  title: 'Components|PdfViewer',
  decorators: [withKnobs, withA11y]
}

const useStyles = makeStyles(() =>
  createStyles({
    pdfContainer: {
      position: 'relative',
      '& .pdfViewer': {
        display: 'flex',
        justifyContent: 'center'
      }
    }
  })
)

export const PdfViewer = () => {
  const [totalPages, setTotalPages] = useState<number>(1)
  const [pageNumber, setPageNumber] = useState<number>(1)

  const classes = useStyles()

  return (
    <ThemeContextProvider theme={myTheme}>
      <AruiPdfViewer
        file={pdf}
        pageNumber={pageNumber}
        setTotalPage={(total) => setTotalPages(total)}
        className={classes.pdfContainer}
      />
    </ThemeContextProvider>
  )
}
