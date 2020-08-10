import React, { useState, useEffect } from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'
import { PictureAsPdf, Clear } from '@material-ui/icons'
import pdfLogo from '../assets/pdf.png'
import { BasicProps } from '../Types'

const useStyles = makeStyles(() => ({
  iframe: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    border: '#757575 1px solid',
    borderBottom: 'none'
  },
  image: {
    width: '100%',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    border: '#757575 1px solid',
    borderBottom: 'none'
  },
  titleContainer: {
    marginTop: '-8px',
    width: 'calc(100% - 10px)',
    height: '20%',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    background: 'white',
    border: '#757575 1px solid',
    padding: '5px'
  },
  clear: {
    color: '#757575',
    position: 'absolute',
    right: '5px',
    cursor: 'pointer'
  },
  pdf: {
    color: '#e54539'
  },
  text: {
    marginLeft: '5px',
    fontSize: '12px',
    fontWeight: 600,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  clickableContainer: {
    cursor: 'pointer'
  }
}))

interface FilePreviewProps extends BasicProps {
  url?: string
  file?: File
  title: string
  readonly?: boolean
  onRemove?: () => void
  onClick?: () => void
}

export const FilePreview = (props: FilePreviewProps) => {
  const {
    url = pdfLogo,
    file,
    readonly,
    title,
    className,
    style,
    onRemove,
    onClick,
    id
  } = props
  const [urlData, setUrlData] = useState<string>('')
  useEffect(() => {
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setUrlData(reader.result as string)
      }
    }
  }, [file])

  const classes = useStyles()
  return (
    <div
      className={`${className} ${onClick && classes.clickableContainer}`}
      style={style}
      onClick={onClick}
      id={id}
    >
      {urlData !== '' ? (
        <iframe src={urlData} className={classes.iframe} scrolling='no' />
      ) : (
        <img src={url} alt={title} className={classes.image} />
      )}
      <Box
        className={classes.titleContainer}
        display='flex'
        position='relative'
        alignItems='center'
      >
        <PictureAsPdf className={classes.pdf} />
        <Typography
          variant='body2'
          align='left'
          className={classes.text}
          style={{
            maxWidth: readonly ? 'calc(100% - 30px)' : 'calc(100% - 50px)'
          }}
        >
          {title}
        </Typography>
        {!readonly && (
          <Clear
            className={classes.clear}
            onClick={(event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
              event.stopPropagation()
              onRemove && onRemove()
            }}
          />
        )}
      </Box>
    </div>
  )
}
