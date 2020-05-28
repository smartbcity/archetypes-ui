import React from 'react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import { SBDividerContent, SBButton } from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'
import { Typography } from '@material-ui/core'

export default {
  title: 'Components|SB/DividerContent',
  decorators: [withKnobs, withA11y]
}

export const DividerContent = () => {
  const dividerText = text('dividerText', 'Or')
  const dividerDirection = select(
    'dividerDirection',
    { horizontal: 'horizontal', vertical: 'vertical' },
    'horizontal'
  )

  return (
    <SBDividerContent
      dividerText={dividerText}
      dividerDirection={dividerDirection}
      style={{ width: '300px' }}
    >
      <>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          align='center'
        >
          connect with your identity wallet
        </Typography>
        <SBButton
          style={{
            margin: '20px auto',
            display: 'block',
            position: 'relative'
          }}
        >
          Yes
        </SBButton>
      </>
      <>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          align='center'
        >
          connect with the mobile application
        </Typography>
        <SBButton
          style={{
            margin: '20px auto',
            display: 'block',
            position: 'relative'
          }}
        >
          Yes
        </SBButton>
      </>
    </SBDividerContent>
  )
}
