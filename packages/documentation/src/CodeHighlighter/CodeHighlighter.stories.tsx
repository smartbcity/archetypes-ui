import React from 'react'
import {
  CodeHighlighter as AruiCodeHighlighter,
  CodeHighlighterProps
} from './CodeHighlighter'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

const style = `export type darkStyles =
| 'atomOneDark'
| 'androidstudio'
| 'darcula'
| 'hopscotch'
| 'tomorrowNight'
export type lightStyles =
| 'atomOneLight'
| 'gruvboxLight'
| 'tomorrow'
`

export default {
  title: 'Documentation/CodeHighlighter',
  component: AruiCodeHighlighter,
  argTypes: {
    style: {
      table: {
        type: {
          detail: style
        }
      }
    }
  }
} as Meta

export const CodeHighlighter: Story<CodeHighlighterProps> = (
  args: CodeHighlighterProps
) => <AruiCodeHighlighter {...args} />

CodeHighlighter.args = {
  code: `function(arg: String) {
    console.log(arg)
  }`,
  language: 'typescript',
  indentCode: true
}
CodeHighlighter.storyName = 'CodeHighlighter'

export const objectHiglighter: Story = () => (
  <AruiCodeHighlighter
    object={{
      name: 'test',
      age: 18,
      do: (arg: String) => {
        console.log(arg)
      },
      child: {
        name: 'testChild',
        age: 5
      }
    }}
  />
)

objectHiglighter.storyName = 'object highlighter'
