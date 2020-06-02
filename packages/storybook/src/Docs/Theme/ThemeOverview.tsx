import React, { useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import {
  SBCard,
  ThemeContextProvider,
  SBButton,
  SBPanel
} from '@smartb/archetypes-ui-components'
import { myTheme, getShadows } from '../Theme/Theme'
import ThemeGetter from './ThemeGetter'

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: '150px',
      height: '150px',
      boxShadow: 'rgba(0, 0, 0, 0.2) -3px -5px inset',
      margin: '10px',
      borderRadius: '5px',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      width: '100%'
    },
    root: {
      width: '100%',
      border: '#dbdbdb 1px solid',
      borderRadius: '10px',
      marginBottom: '20px'
    },
    header: {
      width: '80%',
      marginLeft: '10%',
      borderBottom: '#dbdbdb 1px solid',
      display: 'flex',
      padding: '15px',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    image: {
      maxWidth: '500px',
      maxHeight: '200px'
    },
    text: {
      color: 'black'
    },
    inputContainer: {
      display: 'inline-flex',
      flexWrap: 'wrap'
    },
    input: {
      width: '20px'
    }
  })
)

const ThemeOverview = () => {
  const classes = useStyles()
  const [shadowValues, setShadowValues] = useState(() => {
    let shadow = localStorage.getItem('shadow')
    if (shadow === null) shadow = '0px 3px 10px 0 rgba(0,0,0,0.1)'
    shadow = shadow
      .replace(/px/g, '')
      .replace('rgba(', '')
      .replace(')', '')
      .replace(/,/g, ' ')
    return shadow.split(' ')
  })

  const [primaryColor, setPrimaryColor] = useState(myTheme.primaryColor)

  const [secondaryColor, setSecondaryColor] = useState(myTheme.secondaryColor)

  const [tertiaryColor, setTertiaryColor] = useState(myTheme.tertiaryColor)

  const onTertiaryColorChange = (color: string) => {
    localStorage.setItem('tertiaryColor', color)
    setTertiaryColor(color)
    myTheme.tertiaryColor = color
  }

  const onSecondaryColorChange = (color: string) => {
    localStorage.setItem('secondaryColor', color)
    setSecondaryColor(color)
    myTheme.secondaryColor = color
  }

  const onPrimaryColorChange = (color: string) => {
    localStorage.setItem('primaryColor', color)
    setPrimaryColor(color)
    myTheme.primaryColor = color
  }

  const onShadowChange = (values: string[]) => {
    let stringShadow = `${values[0]}px ${values[1]}px ${values[2]}px ${values[3]}px rgba(${values[4]},${values[5]},${values[6]},${values[7]})`
    localStorage.setItem('shadow', stringShadow)
    setShadowValues(values)
    myTheme.shadows = getShadows(stringShadow)
  }

  return (
    <ThemeContextProvider theme={myTheme}>
      <div className={classes.root}>
        <div className={classes.header}>
          <Typography variant='subtitle2'>
            Il vous suffit de définir uniquement la première élévation et toutes
            les autres seront calculées automatiquement:
          </Typography>
          <div className={classes.inputContainer}>
            boxShadow:{' '}
            <input
              className={classes.input}
              id='shadow0'
              type='text'
              onChange={(event) => {
                let newValues = [...shadowValues]
                newValues[0] = event.target.value
                onShadowChange(newValues)
              }}
              value={shadowValues[0]}
            />
            px{' '}
            <input
              className={classes.input}
              id='shadow1'
              type='text'
              onChange={(event) => {
                let newValues = [...shadowValues]
                newValues[1] = event.target.value
                onShadowChange(newValues)
              }}
              value={shadowValues[1]}
            />
            px{' '}
            <input
              className={classes.input}
              id='shadow2'
              type='text'
              onChange={(event) => {
                let newValues = [...shadowValues]
                newValues[2] = event.target.value
                onShadowChange(newValues)
              }}
              value={shadowValues[2]}
            />
            px{' '}
            <input
              className={classes.input}
              id='shadow3'
              type='text'
              onChange={(event) => {
                let newValues = [...shadowValues]
                newValues[3] = event.target.value
                onShadowChange(newValues)
              }}
              value={shadowValues[3]}
            />
            px rgba(
            <input
              className={classes.input}
              id='shadow4'
              type='text'
              onChange={(event) => {
                let newValues = [...shadowValues]
                newValues[4] = event.target.value
                onShadowChange(newValues)
              }}
              value={shadowValues[4]}
            />
            ,
            <input
              className={classes.input}
              id='shadow5'
              type='text'
              onChange={(event) => {
                let newValues = [...shadowValues]
                newValues[5] = event.target.value
                onShadowChange(newValues)
              }}
              value={shadowValues[5]}
            />
            ,
            <input
              className={classes.input}
              id='shadow6'
              type='text'
              onChange={(event) => {
                let newValues = [...shadowValues]
                newValues[6] = event.target.value
                onShadowChange(newValues)
              }}
              value={shadowValues[6]}
            />
            ,
            <input
              className={classes.input}
              id='shadow7'
              type='text'
              onChange={(event) => {
                let newValues = [...shadowValues]
                newValues[7] = event.target.value
                onShadowChange(newValues)
              }}
              value={shadowValues[7]}
            />
            )
          </div>
        </div>
        <div className={classes.container}>
          <SBCard header='elevation 1' elevation={1} style={{ width: '300px' }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </SBCard>
          <SBCard header='elevation 6' elevation={6} style={{ width: '300px' }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </SBCard>
          <SBCard
            header='elevation 12'
            elevation={12}
            style={{ width: '300px' }}
          >
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </SBCard>
        </div>
      </div>
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.inputContainer}>
            primaryColor:{' '}
            <input
              type='text'
              onChange={(event) => onPrimaryColorChange(event.target.value)}
              value={primaryColor}
            />
          </div>
        </div>
        <div className={classes.container}>
          <SBCard header='Primary Color' style={{ width: '300px' }}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </SBCard>
        </div>
      </div>
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.inputContainer}>
            secondaryColor:{' '}
            <input
              type='text'
              onChange={(event) => onSecondaryColorChange(event.target.value)}
              value={secondaryColor}
            />
          </div>
        </div>
        <div className={classes.container}>
          <SBButton style={{ margin: '20px' }}>Secondary Color</SBButton>
        </div>
      </div>
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.inputContainer}>
            tertiaryColor:{' '}
            <input
              type='text'
              onChange={(event) => onTertiaryColorChange(event.target.value)}
              value={tertiaryColor}
            />
          </div>
        </div>
        <div className={classes.container}>
          <SBPanel style={{ margin: '20px', width: '500px' }}>
            Tertiary Color
          </SBPanel>
        </div>
      </div>
      <ThemeGetter myTheme={myTheme} />
    </ThemeContextProvider>
  )
}

export default ThemeOverview
