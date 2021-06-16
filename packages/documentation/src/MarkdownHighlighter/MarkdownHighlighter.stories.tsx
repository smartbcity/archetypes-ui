import React from 'react'
import {
  MarkdownHighlighter as AruiMarkdownHighlighter,
  MarkdownHighlighterProps
} from './MarkdownHighlighter'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
//@ts-ignore
import md from '!raw-loader!./example.md'

export default {
  title: 'Documentation/MarkdownHighlighter',
  component: AruiMarkdownHighlighter
} as Meta

export const MarkdownHighlighter: Story<MarkdownHighlighterProps> = (
  args: MarkdownHighlighterProps
) => <AruiMarkdownHighlighter {...args} />

MarkdownHighlighter.args = {
  markdown: `
  # Example
  - 1
  - 2 
  - \`3\`
  `
}

MarkdownHighlighter.storyName = 'MarkdownHighlighter'

export const MarkdownHighlighterFromFile: Story = () => (
  //import md from './example.md'
  <AruiMarkdownHighlighter markdown={md} />
)

MarkdownHighlighterFromFile.storyName = 'MarkdownHighlighterFromFile'
