import React, { useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      border: '#dbdbdb 1px solid',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      position: 'relative',
      padding: '20px'
    },
    button: {
      position: 'absolute',
      bottom: '0px',
      right: '0px',
      background: 'rgba(0, 0, 0, 0.04)'
    }
  })
)

interface PreviewProps {
  children: React.ReactNode
  code: string
}

const Preview = (props: PreviewProps) => {
  const { children, code } = props
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={classes.root}>
        {children}
        <Button className={classes.button} onClick={() => setOpen(!open)}>
          {open ? 'hide code' : 'show code'}
        </Button>
      </div>
      <div style={{ display: open ? 'block' : 'none' }}>
        <SyntaxHighlighter language='typescript' style={tomorrow}>
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  )
}

export default Preview
