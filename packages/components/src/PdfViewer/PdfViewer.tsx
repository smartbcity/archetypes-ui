import React from 'react'
import { Page, Document } from 'react-pdf'

export interface PdfViewerProps {
  /**
   * Pdf file to preview
   */
  file: any
  /**
   * The page number to display
   */
  pageNumber: number
  /**
   * Set the total number page of the pdf file
   * @param total
   */
  setTotalPage: (total: number) => void
  /**
   * The classes applied to the different part of the component
   */
  className?: string

  scale?: number
  /**
   * Define the width of the component
   */
  width?: number
}

export const PdfViewer = (props: PdfViewerProps) => {
  const { pageNumber, setTotalPage, className, file, scale, width } = props

  function onDocumentLoadSuccess(pdf: any) {
    setTotalPage(pdf.numPages)
  }

  /* const draw = (file: File) => {
        const canvas = document.querySelector('.react-pdf__Page__canvas') as HTMLCanvasElement
        if (canvas !== null && canvas !== undefined) {

            const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                const ctx = canvas.getContext('2d')
                const image = new Image()
                image.src = reader.result as string
                ctx?.drawImage(image, 100, 850, 100, 100)
                const url = canvas.toDataURL("image/png")
                console.log(url)
            };
        }

    } */

  return (
    <Document
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}
      className={className}
    >
      <Page
        pageNumber={pageNumber}
        renderMode='canvas'
        className='pdfViewer'
        scale={scale}
        width={width}
      />
      {/* <DropPicture onPictureDroped={(file) => draw(file)} onRemovePicture={() => {}}/> */}
    </Document>
  )
}
