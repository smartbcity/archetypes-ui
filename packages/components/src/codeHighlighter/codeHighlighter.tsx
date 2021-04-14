import React from 'react'
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps
} from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import stringifyObject from 'stringify-object'
import { useMemo } from 'react'

export type codeHighlighterProps = SyntaxHighlighterProps & {
  code: string
  formatCode?: boolean
}

export const codeHighlighter = (props: codeHighlighterProps) => {
  const { code, formatCode = false, ...other } = props
  const formated = useMemo(() => {
    if (!formatCode) return
    return stringifyObject(code, {
      indent: '  ',
      singleQuotes: false
    })
  }, [code])
  return (
    <SyntaxHighlighter style={tomorrow} {...other}>
      {formated ?? code}
    </SyntaxHighlighter>
  )
}
