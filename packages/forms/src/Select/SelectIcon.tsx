import React from 'react'
import {SelectIcon} from '../assets/icons'


export interface SelectProps {
}

export const Select = React.forwardRef(() => {
  return (
      <SelectIcon
        color='#98A5AE'
        style={{
          width: '20px',
          height: "20px",
          right: '10px',
          top: 'calc(50% - 10px)'
        }}
      />
  )
})
