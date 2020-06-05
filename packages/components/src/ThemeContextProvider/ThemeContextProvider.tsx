import React, { createContext } from 'react'

export interface Theme {
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
  shadows: string[]
}

export const themeContext = createContext({} as Theme)

interface ThemeContextProviderProps {
  theme: Theme
  children: React.ReactNode
}

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const { theme, children } = props
  return <themeContext.Provider value={theme}>{children}</themeContext.Provider>
}
