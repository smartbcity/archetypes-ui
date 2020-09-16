import React from 'react'
import { Page, Document } from 'react-pdf'

interface PdfViewerProps {
  file: any
  pageNumber: number
  setTotalPage: (total: number) => void
  className?: string
  scale?: number
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
