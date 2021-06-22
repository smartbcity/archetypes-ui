import React from 'react'
import { Link as AruiLink, LinkProps } from './Link'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Link',
  component: AruiLink,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/4Nl4422AUGHNVClZOHzPg8/SmartB-UI-kit?node-id=214%3A40'
    }
  }
} as Meta

export const Link: Story<LinkProps> = (args: LinkProps) => (
  <AruiLink {...args} />
)

Link.args = {
  children: 'I am a link',
  href: '/?path=/docs/components-link--link'
}

Link.storyName = 'Link'
