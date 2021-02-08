import React, { useState } from 'react'
import { PopUp as AruiPopUp, PopUpProps } from './PopUp'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/PopUp',
  component: AruiPopUp
} as Meta

const Template: Story<PopUpProps> = (args: PopUpProps) => {
  const [open, setOpen] = useState(true)
  return <AruiPopUp {...args} open={open} onClose={() => setOpen(!open)} />
}

export const PopUp = Template.bind({})
PopUp.args = {
  title: 'Title',
  children: 'Body',
  actions: [
    {
      label: 'annuler',
      handler: action('clicked on annuler'),
      variant: 'outlined'
    },
    {
      label: 'continuer',
      handler: action('clicked on continuer'),
      variant: 'outlined'
    }
  ]
}
