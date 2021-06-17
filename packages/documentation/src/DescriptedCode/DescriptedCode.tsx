import { Box } from '@material-ui/core'
import { BasicProps, lowLevelStyles } from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'
import React from 'react'
import { CodeHighlighter, CodeHighlighterProps } from '../CodeHighlighter'
import {
  MarkdownHighlighter,
  MarkdownHighlighterProps
} from '../MarkdownHighlighter'

const useStyles = lowLevelStyles()({
  codeContainer: {
    '& pre': {
      maxHeight: '500px'
    }
  }
})

export interface DescriptedCodeProps extends BasicProps {
  /**
   * The description placed in the right container. It will be ignored if `markdownDescription` is provided
   */
  description?: React.ReactNode
  /**
   * The markdown displyed in the right container
   */
  markdownDescription?: string
  /**
   * The code placed in the right sticky container
   */
  code?: string
  /**
   * The props of the codeHighlighter component
   */
  codeHighlighterProps?: Partial<CodeHighlighterProps>
  /**
   * The props of the markdownHighlighter component used if `markdownDescription` is provided
   */
  markdownHighlighterProps?: Partial<MarkdownHighlighterProps>
}

export const DescriptedCode = (props: DescriptedCodeProps) => {
  const {
    code,
    codeHighlighterProps,
    description,
    markdownDescription,
    markdownHighlighterProps,
    className,
    style,
    id
  } = props
  const classes = useStyles()
  return (
    <Box
      className={clsx(className, 'AruiDescriptedCode-root')}
      style={style}
      id={id}
      display='flex'
      flexDirection='row'
      padding='20px 0px'
    >
      <Box
        className={'AruiDescriptedCode-leftContainer'}
        width='60%'
        padding='0px 10px'
        boxSizing='border-box'
      >
        {markdownDescription ? (
          <MarkdownHighlighter
            markdown={markdownDescription}
            {...markdownHighlighterProps}
          />
        ) : (
          description
        )}
      </Box>
      <Box
        className={'AruiDescriptedCode-rightContainer'}
        width='40%'
        padding='0px 10px'
        position='sticky'
        boxSizing='border-box'
        paddingTop='30px'
        top='0'
        alignSelf='flex-start'
      >
        <CodeHighlighter
          code={code}
          {...codeHighlighterProps}
          className={clsx(
            classes.codeContainer,
            codeHighlighterProps?.className
          )}
        />
      </Box>
    </Box>
  )
}
