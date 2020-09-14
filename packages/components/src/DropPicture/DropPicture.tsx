import React, { useState, useEffect } from 'react'
import ReactDropzone, { FileRejection } from 'react-dropzone'
import { Tooltip, Paper, makeStyles, Typography } from '@material-ui/core'
import { Clear, AddPhotoAlternate } from '@material-ui/icons'
import { BasicProps } from '../Types'

const useStyles = (width: number) =>
  makeStyles(() => ({
    root: {
      width: `${width}px`
    },
    dropZone: {
      width: `${width}px`,
      height: `${width}px`,
      background: 'rgb(237, 237, 237)',
      border: 'dashed rgba(209,202,203,1) 2px',
      borderRadius: '5px',
      position: 'relative',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none'
      }
    },
    error: {
      color: '#bd1313',
      fontSize: '12px'
    },
    image: {
      width: `${width}px`,
      borderRadius: '5px'
    },
    clear: {
      color: '#757575',
      width: '40px',
      height: '40px',
      display: 'none',
      position: 'absolute',
      transform: 'translate(-50%,-50%)',
      top: '50%',
      left: '50%'
    },
    container: {
      width: `${width}px`,
      height: 'auto',
      position: 'relative',
      cursor: 'pointer',
      '&:hover img': {
        opacity: '0.4'
      },
      '&:hover svg': {
        display: 'block'
      }
    },
    add: {
      color: 'rgba(209,202,203,1)',
      width: '70px',
      height: '70px',
      position: 'absolute',
      transform: 'translate(-50%,-50%)',
      top: '50%',
      left: '50%'
    }
  }))

interface DropPictureProps extends BasicProps {
  onPictureDroped: (picture: File) => void
  onRemovePicture: () => void
  width?: number
  readonly?: boolean
  src?: string
  defaultLogo?: string
}

export const DropPicture = (props: DropPictureProps) => {
  const {
    onPictureDroped,
    onRemovePicture,
    className,
    style,
    width = 200,
    readonly = false,
    src = '',
    defaultLogo = '',
    id
  } = props
  const classes = useStyles(width)()
  const [isValid, setValidity] = useState<boolean>(true)
  const [logo, setLogo] = useState<string>(src)
  const [errorMessage, setErrorMessage] = useState<string>(
    'Insérez une seule image valide'
  )

  useEffect(() => {
    setLogo(src)
  }, [src])

  const onUpload = (acceptedFiles: File[]) => {
    onPictureDroped(acceptedFiles[0])
    setValidity(true)
    const reader = new FileReader()
    reader.readAsDataURL(acceptedFiles[0])
    reader.onload = () => {
      setLogo(reader.result as string)
    }
  }

  const onReject = (files: FileRejection[]) => {
    setErrorMessage('Insérez une seule image valide')
    files.forEach((file) => {
      if (file.errors[0].code === 'file-too-large')
        setErrorMessage('La taille de votre image ne doit pas dépasser 1Mo')
      if (file.errors[0].code === 'too-many-files')
        setErrorMessage("N'insérez qu'une seule image")
      if (file.errors[0].code === 'file-invalid-type')
        setErrorMessage('Votre image doit être au format JPEG ou PNG')
    })
    setValidity(false)
  }

  const onRemoveLogo = () => {
    setLogo('')
    onRemovePicture()
  }

  if (readonly)
    return (
      <img
        src={logo !== '' ? logo : defaultLogo}
        className={classes.image}
        alt='le logo'
        onError={() => {
          setLogo('')
        }}
      />
    )

  return (
    <ReactDropzone
      onDropAccepted={(files) => onUpload(files)}
      onDropRejected={(files) => onReject(files)}
      multiple={false}
      accept={'image/jpeg, image/png'}
      maxSize={1000000}
    >
      {({ getRootProps, getInputProps }) =>
        logo === '' ? (
          <div className={`${classes.root} ${className}`} style={style} id={id}>
            <Tooltip title='Ajouter un logo'>
              <Paper
                elevation={0}
                className={classes.dropZone}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <AddPhotoAlternate className={classes.add} />
              </Paper>
            </Tooltip>
            {!isValid && (
              <Typography
                className={classes.error}
                variant='body2'
                align='center'
              >
                {errorMessage}
              </Typography>
            )}
          </div>
        ) : (
          <Tooltip title='Supprimer ce logo'>
            <div
              className={`${classes.container} ${className}`}
              style={style}
              id={id}
              onClick={onRemoveLogo}
            >
              <img
                src={logo}
                className={classes.image}
                alt='le logo'
                onError={() => {
                  setLogo('')
                }}
              />
              <Clear className={classes.clear} />
            </div>
          </Tooltip>
        )
      }
    </ReactDropzone>
  )
}
