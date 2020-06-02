import React from 'react'
import { Theme } from '@smartb/archetypes-ui-components'

interface ThemeGetterProps {
  myTheme: Theme
}

const ThemeGetter = (props: ThemeGetterProps) => {
  const { myTheme } = props
  const themeString = `const defaultTheme = {
    primaryColor: ${myTheme.primaryColor},
    secondaryColor: ${myTheme.secondaryColor},
    tertiaryColor: ${myTheme.tertiaryColor},
    shadows: ["${myTheme.shadows[0]}",
    "${myTheme.shadows[1]}",
    "${myTheme.shadows[2]}",
    "${myTheme.shadows[3]}",
    "${myTheme.shadows[4]}",
    "${myTheme.shadows[5]}",
    "${myTheme.shadows[6]}",
    "${myTheme.shadows[7]}",
    "${myTheme.shadows[8]}",
    "${myTheme.shadows[9]}",
    "${myTheme.shadows[10]}",
    "${myTheme.shadows[11]}",
    "${myTheme.shadows[12]}"]
}
`
  return (
    <pre
      style={{
        backgroundColor: '#F8F8F8',
        borderRadius: '3px',
        padding: '3px 5px',
        border: '1px solid #EEEEEE'
      }}
    >
      {themeString}
    </pre>
  )
}

export default ThemeGetter
