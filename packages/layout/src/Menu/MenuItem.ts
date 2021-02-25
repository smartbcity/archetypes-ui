import React from 'react'

export interface MenuItem<T = {}> {
  key: string
  goto?: () => void
  href?: string
  label: string
  component?: React.ElementType<any>
  icon?: JSX.Element
  componentProps?: T
}

export interface Menu<T = {}> extends MenuItem<T> {
  items?: Menu<T>[]
}
