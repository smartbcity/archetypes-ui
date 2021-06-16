import React from 'react'
import ReactMarkdown from 'react-markdown'
import { CodeHighlighter } from '../CodeHighlighter'
import 'github-markdown-css'
import { lowLevelStyles } from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'
import gfm from 'remark-gfm'
import raw from 'rehype-raw'

const useStyles = lowLevelStyles()({
  markdown: {
    '& pre': {
      backgroundColor: 'unset',
      padding: '0',
      marginBottom: '8px'
    },
    '& img': {
      width: '100%',
      maxWidth: '300px'
    }
  }
})

export interface MarkdownHighlighterProps {
  /**
   * The markdown string to render
   */
  markdown: string
  /**
   * The className applied to the root element
   */
  className?: string
}

const components = {
  //@ts-ignore
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <CodeHighlighter
        language={match[1]}
        code={String(children).replace(/\n$/, '')}
        {...props}
      />
    ) : (
      <code className={className} {...props} children={children} />
    )
  },
  mark: (object: any) => {
    console.log(object)
    return (
      <mark style={{ backgroundColor: object.color }}>{object.children}</mark>
    )
  }
}

export const MarkdownHighlighter = (props: MarkdownHighlighterProps) => {
  const { markdown, className } = props
  const classes = useStyles()
  return (
    <ReactMarkdown
      className={clsx('markdown-body', classes.markdown, className)}
      remarkPlugins={[[gfm, { singleTilde: false }]]}
      rehypePlugins={[raw]}
      //@ts-ignore
      components={components}
      children={markdown}
    />
  )
}
