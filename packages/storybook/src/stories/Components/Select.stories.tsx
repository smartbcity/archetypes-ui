import React, { useState } from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { MeSelect, MeSelectItem } from '@smartb/archetypes-ui-components'
import { withA11y } from '@storybook/addon-a11y'

export default {
  title: 'Components|Select',
  decorators: [withKnobs, withA11y]
}

export const Select = () => {
  const [value, setValue] = useState('value1')
  const id = text('id', 'select1')
  const label = text('label', 'label')
  const disabled = boolean('disabled', false)
  const items: MeSelectItem[] = [
    {
      value: 'value1',
      label: 'item1'
    },
    {
      value: 'value2',
      label: 'item2'
    }
  ]
  return (
    <MeSelect
      id={id}
      label={label}
      value={value}
      disabled={disabled}
      items={items}
      onChange={(event) => setValue(event.target.value as string)}
    />
  )
}
