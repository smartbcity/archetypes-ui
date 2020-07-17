import React, { createContext } from 'react'
import {
  createMuiTheme,
  ThemeProvider,
  Theme as MuiTheme
} from '@material-ui/core'

export interface Theme {
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
  shadows: string[]
}

const defaultTheme: Theme = {
  primaryColor: '#fec519',
  secondaryColor: '#edba27',
  tertiaryColor: '#e0e0e0',
  shadows: [
    '0 0px 0px 0 rgba(0,0,0,0)',
    '0px 3px 10px 0 rgba(0,0,0,0.1)',
    '0px 3.75px 12.5px 0px rgba(0,0,0,0.12)',
    '0px 4.5px 15px 0px rgba(0,0,0,0.14)',
    '0px 5.25px 17.5px 0px rgba(0,0,0,0.16)',
    '0px 6px 20px 0px rgba(0,0,0,0.18)',
    '0px 6.75px 22.5px 0px rgba(0,0,0,0.2)',
    '0px 7.5px 25px 0px rgba(0,0,0,0.22)',
    '0px 8.25px 27.5px 0px rgba(0,0,0,0.24)',
    '0px 9px 30px 0px rgba(0,0,0,0.26)',
    '0px 9.75px 32.5px 0px rgba(0,0,0,0.28)',
    '0px 10.5px 35px 0px rgba(0,0,0,0.3)',
    '0px 11.25px 37.5px 0px rgba(0,0,0,0.32)'
  ]
}

const muiTheme = (theme: Theme, customMuiTheme?: MuiTheme) => {
  const themeOverride = {
    overrides: {
      MuiPaper: {
        elevation1: {
          boxShadow: theme.shadows[1]
        },
        elevation2: {
          boxShadow: theme.shadows[2]
        },
        elevation3: {
          boxShadow: theme.shadows[3]
        },
        elevation4: {
          boxShadow: theme.shadows[4]
        },
        elevation5: {
          boxShadow: theme.shadows[5]
        },
        elevation6: {
          boxShadow: theme.shadows[6]
        },
        elevation7: {
          boxShadow: theme.shadows[7]
        },
        elevation8: {
          boxShadow: theme.shadows[8]
        },
        elevation9: {
          boxShadow: theme.shadows[9]
        },
        elevation10: {
          boxShadow: theme.shadows[10]
        },
        elevation11: {
          boxShadow: theme.shadows[11]
        },
        elevation12: {
          boxShadow: theme.shadows[12]
        }
      }
    }
  }
  return customMuiTheme
    ? createMuiTheme(themeOverride, customMuiTheme)
    : createMuiTheme(themeOverride)
}

export const themeContext = createContext(defaultTheme)

interface ThemeContextProviderProps {
  theme?: Theme
  children: React.ReactNode
  customMuiTheme?: MuiTheme
}

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const { theme = defaultTheme, children, customMuiTheme } = props
  const defaultMuiTheme = muiTheme(theme, customMuiTheme)

  return (
    <themeContext.Provider value={theme}>
      <ThemeProvider theme={defaultMuiTheme}>{children}</ThemeProvider>
    </themeContext.Provider>
  )
}
