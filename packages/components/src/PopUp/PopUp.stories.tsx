import React, { useState } from 'react'
import {
  PopUp as AruiPopUp,
  PopUpBasicProps,
  Action as PopUpAction
} from './PopUp'
import { Meta } from '@storybook/react'
import { Story } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { styles, classes, Action } from './types'
import { Box, Typography } from '@material-ui/core'
import imageHolder from '../assets/imageHolder.jpg'
import { Button } from '../Buttons'

export default {
  title: 'Components/PopUp',
  component: AruiPopUp,
  argTypes: {
    children: {
      control: null
    },
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

const Template: Story<PopUpBasicProps> = (args: PopUpBasicProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open the popup</Button>
      <AruiPopUp {...args} open={open} onClose={() => setOpen(!open)} />
    </>
  )
}

const Template2: Story = () => {
  const [open, setOpen] = useState(false)
  const actions: PopUpAction[] = [
    {
      label: 'continuer',
      key: 'continuPopupButton',
      onClick: () => setOpen(!open)
    },
    {
      label: 'annuler',
      key: 'cancelPopupButton',
      onClick: () => setOpen(!open),
      variant: 'text'
    }
  ]
  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open the popup</Button>
      <AruiPopUp
        open={open}
        onClose={() => setOpen(!open)}
        styles={{ actions: { flexDirection: 'column' } }}
        actions={actions}
      >
        <Box display='flex' justifyContent='center'>
          <img
            src={imageHolder}
            alt='image holder'
            style={{ marginBottom: '10px' }}
          />
        </Box>
        <Typography
          variant='h4'
          style={{ marginBottom: '15px' }}
          align='center'
        >
          Popup title
        </Typography>
        <Typography variant='body1' align='center'>
          This is a placeholer text just to show the default size and weight for
          body text typography in a popup.
        </Typography>
      </AruiPopUp>
    </>
  )
}

export const PopUp = Template.bind({})

export const alternativePopUp = Template2.bind({})
PopUp.args = {
  children: (
    <>
      <Typography variant='h4' style={{ marginBottom: '15px' }}>
        Popup title
      </Typography>
      <Typography variant='body1'>
        This is a placeholer text just to show the default size and weight for
        body text typography in a popup.
      </Typography>
    </>
  ),
  actions: [
    {
      label: 'annuler',
      key: 'cancelPopupButton',
      onClick: action('clicked on annuler'),
      variant: 'text'
    },
    {
      label: 'continuer',
      key: 'continuPopupButton',
      onClick: action('clicked on continuer')
    }
  ]
}

PopUp.storyName = 'PopUp'

alternativePopUp.storyName = 'An alternative popup'
