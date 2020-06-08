import React, { createContext } from 'react'
import { createMuiTheme, ThemeProvider, Theme as MuiTheme } from '@material-ui/core'

export interface Theme {
  primaryColor: string
  secondaryColor: string
  tertiaryColor: string
  shadows: string[]
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
return customMuiTheme ?  createMuiTheme(themeOverride, customMuiTheme) : createMuiTheme(themeOverride)};

export const themeContext = createContext({} as Theme)

interface ThemeContextProviderProps {
  theme: Theme;
  children: React.ReactNode;
  customMuiTheme?: MuiTheme;
}

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const { theme, children, customMuiTheme } = props;
  const defaultMuiTheme = muiTheme(theme, customMuiTheme);
  
  return <themeContext.Provider value={theme}>
          <ThemeProvider theme={defaultMuiTheme}>{children}</ThemeProvider>
        </themeContext.Provider>
}
