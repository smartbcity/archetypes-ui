import React, { createContext, useCallback, useContext } from 'react'
import { ThemeProvider, Theme as MuiTheme } from '@material-ui/core'
import { defaultMaterialUiTheme, defaultTheme, Theme } from './Theme'

export interface ThemeContextProps {
  theme: Theme
  changeTheme: (theme: Partial<Theme>) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: defaultTheme,
  changeTheme: () => {}
})

export interface ThemeContextProviderProps {
  children: React.ReactNode
  theme: Partial<Theme>
  customMuiTheme?: Partial<MuiTheme>
}

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const { children, customMuiTheme } = props
  const [theme, setTheme] = React.useState<Theme>({
    ...defaultTheme,
    ...props.theme
  })
  const setPartialTheme = useCallback(
    (partialTheme: Partial<Theme>) => setTheme({ ...theme, ...partialTheme }),
    []
  )
  const defaultMuiTheme = defaultMaterialUiTheme(theme, customMuiTheme)
  return (
    <ThemeContext.Provider
      value={{ theme: theme, changeTheme: setPartialTheme }}
    >
      <ThemeProvider theme={defaultMuiTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const themeContext = useContext(ThemeContext)
  return themeContext.theme
}

export const useThemeContext = () => {
  return useContext(ThemeContext)
}
