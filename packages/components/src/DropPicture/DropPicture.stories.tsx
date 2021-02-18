import React from 'react'
import { DropPicture as AruiDropPicture, DropPictureProps } from './DropPicture'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'Components/DropPicture',
  component: AruiDropPicture
} as Meta

const Template: Story<DropPictureProps> = (args: DropPictureProps) => (
  <AruiDropPicture {...args}></AruiDropPicture>
)

export const DropPicture = Template.bind({})
DropPicture.args = {
  onRemovePicture: () => {},
  onPictureDroped: () => {}
}
DropPicture.storyName = 'DropPicture'
