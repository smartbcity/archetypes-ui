import {Theme, useTheme} from "@smartb/archetypes-ui-components";
import {makeStyles} from "@material-ui/core";

import { Theme as MuiTheme } from '@material-ui/core/styles/createMuiTheme'


const darkGrey = '#353945';
const textFieldGrey = '#D1DCE7';
const error = '#f44336';

export const useInputStylesSimple = (disabled: boolean) => {
  const theme = useTheme()
  return useInputStyles(theme, disabled)
}

export const useInputStyles = (theme: Theme, disabled: boolean) => {
  return makeStyles(({palette}: MuiTheme) => ({
    label: {
      marginBottom: '15px',
      fontSize: 16,
      color: `${darkGrey}`
    },
    input: {
      width: '100%',
      '& .MuiInputBase-root': {
        margin: `0px`,
        border: `1px solid ${textFieldGrey}`,
        boxShadow: '0px 0px 0px 1px transparent',
        borderRadius: '5px',
        minHeight: 50,
        backgroundColor: palette.common.white
      },
      '& .MuiInputBase-root.Mui-error': {
        margin: `0px`,
        border: `1px solid ${error}`,
        boxShadow: '0px 0px 0px 1px  transparent',
        borderRadius: '5px',
        backgroundColor: palette.common.white
      },
      '& .MuiInputBase-root:hover': {
        margin: `0px`,
        border: disabled
          ? `1px solid ${textFieldGrey}`
          : `1px solid ${theme.secondaryColor}`,
        borderRadius: '5px'
      },
      '& .MuiInputBase-root.Mui-focused': {
        margin: `0px`,
        border: `1px solid ${theme.secondaryColor}`,
        borderRadius: '5px'
      },
      '& .MuiFormLabel-root': {
        fontWeight: 500,
        fontSize: 16,
        color: `${darkGrey}`,
        marginTop: '5px'
      },
      '& .MuiFormLabel-root.Mui-error': {
        color: error
      },
      '& .MuiInputLabel-filled .MuiInputLabel-filled.MuiInputLabel-shrink': {
        transform: 'translate(12px, 21px) scale(1)'
      },
      '& .MuiFormLabel-root.Mui-focused': {
        fontWeight: 400,
        transform: 'translate(12px, 10px) scale(0.75)'
      },
      '& .MuiFilledInput-underline:before': {
        borderBottom: 'none'
      },
      '& .MuiFilledInput-underline:after': {
        borderBottom: 'none'
      },
      '& .MuiFilledInput-input': {
        padding: '0px 5px'
      },
      '& .MuiFilledInput-input::placeholder': {
        fontSize: '14px'
      },
      '& .MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)': {
        marginTop: '0px !important'
      }
    },
    helperText: {
      position: 'absolute',
      marginTop: '60px'
    },
    clear: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      marginTop: '-12px',
      cursor: 'pointer',
      color: 'rgba(0, 0, 0, 0.54)'
    }
  }))
}
