import React from 'react'
import SyntaxHighlighter, {
  SyntaxHighlighterProps
} from 'react-syntax-highlighter'
import {
  atomOneDark,
  androidstudio,
  atomOneLight,
  darcula,
  gruvboxLight,
  hopscotch,
  tomorrowNight,
  tomorrow
} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import stringifyObject from 'stringify-object'
import { useMemo } from 'react'
import dedent from 'dedent'

export type darkStyles =
  | 'atomOneDark'
  | 'androidstudio'
  | 'darcula'
  | 'hopscotch'
  | 'tomorrowNight'
export type lightStyles = 'atomOneLight' | 'gruvboxLight' | 'tomorrow'

const highlightStyleMap = new Map<darkStyles | lightStyles, any>([
  ['atomOneDark', atomOneDark],
  ['androidstudio', androidstudio],
  ['atomOneLight', atomOneLight],
  ['darcula', darcula],
  ['gruvboxLight', gruvboxLight],
  ['hopscotch', hopscotch],
  ['tomorrowNight', tomorrowNight],
  ['tomorrow', tomorrow]
])

export interface CodeHighlighterProps extends SyntaxHighlighterProps {
  /**
   * The code to highlight
   */
  code?: string
  /**
   * The javascript object to highlight. The prop `code` has the display priority. The object is automaticaly stringified and formated properly
   */
  object?: Object
  /**
   * If true, the code passed in the prop `code` will be indented properly
   * @default false
   */
  indentCode?: boolean
  /**
   * the language of the code
   * @default "typescript"
   */
  language?: string
  /**
   * the stye of the highlight
   * @default "atomOneDark"
   */
  style?: darkStyles | lightStyles
}

export const CodeHighlighter = (props: CodeHighlighterProps) => {
  const {
    code,
    children,
    indentCode = false,
    object,
    style = 'atomOneDark',
    ...other
  } = props
  const formatedObject = useMemo(() => {
    if (!object) return
    return stringifyObject(object, {
      indent: '  ',
      singleQuotes: false
    })
  }, [object])

  const indentedCode = useMemo(() => {
    if (!code) return
    if (indentCode) {
      return dedent(code)
    }
    return
  }, [code, indentCode])

  const selectedStyle = useMemo(() => highlightStyleMap.get(style), [style])

  return (
    <SyntaxHighlighter language='typescript' {...other} style={selectedStyle}>
      {indentedCode ?? code ?? formatedObject ?? children}
    </SyntaxHighlighter>
  )
}
