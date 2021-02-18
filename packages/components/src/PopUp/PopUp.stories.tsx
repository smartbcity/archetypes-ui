import React, { useState } from 'react'
import { PopUp as AruiPopUp, PopUpProps } from './PopUp'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs/blocks'
import { styles, classes, Action } from './types'

export default {
  title: 'Components/PopUp',
  component: AruiPopUp,
  parameters: {
    docs: {
      page: () => (
        <>
          <ArgsTable story={PRIMARY_STORY} />
        </>
      )
    }
  },
  argTypes: {
    actions: {
      table: {
        type: {
          summary: 'Action[]',
          detail: Action
        }
      }
    },
    classes: {
      table: {
        type: {
          summary: 'PopUpClasses',
          detail: classes
        }
      }
    },
    styles: {
      table: {
        type: {
          summary: 'PopUpStyles',
          detail: styles
        }
      }
    }
  }
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

PopUp.storyName = 'PopUp'
