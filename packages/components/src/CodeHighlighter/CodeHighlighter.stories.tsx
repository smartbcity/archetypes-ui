import React from 'react'
import {
  CodeHighlighter as AruiCodeHighlighter,
  CodeHighlighterProps
} from './CodeHighlighter'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/CodeHighlighter',
  component: AruiCodeHighlighter
} as Meta

const Template: Story<CodeHighlighterProps> = (args: CodeHighlighterProps) => (
  <AruiCodeHighlighter {...args} />
)

export const CodeHighlighter = Template.bind({})
CodeHighlighter.args = {
  object: { arg1: 'test', arg2: 1 },
  language: 'typescript'
}
CodeHighlighter.storyName = 'CodeHighlighter'
