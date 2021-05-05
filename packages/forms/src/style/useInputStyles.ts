import { lowLevelStyles, Theme } from '@smartb/archetypes-ui-themes'


const darkGrey = '#323338'
const textFieldGrey = '#C5C7D0'
const disabledColor = "#E6E9EF"

export const useInputStyles = lowLevelStyles<Theme>()({
  label: {
    marginBottom: '15px',
    fontSize: 16,
    color: `${darkGrey}`
  },
  input: {
    '& .MuiSelect-root': {
      backgroundColor: 'white',
      borderRadius: '5px',
      color: "#323338",
      textOverflow: 'ellipsis'
    },
    width: '100%',
    "& .MuiFilledInput-adornedEnd": {
      paddingRight: "10px"
    },
    "& .MuiFilledInput-adornedStart": {
      paddingLeft: "10px"
    },
    "& .MuiFilledInput-root.Mui-disabled": {
      border: `1px solid ${disabledColor}`,
      backgroundColor: disabledColor
    },
    '& .MuiInputBase-root': {
      margin: `0px`,
      border: `1px solid ${textFieldGrey}`,
      boxShadow: '0px 0px 0px 1px transparent',
      borderRadius: '4px',
      backgroundColor: "white"
    },
    '& .MuiInputBase-root.Mui-error': {
      margin: `0px`,
      border: theme => `1px solid ${theme.errorColor}`,
      boxShadow: '0px 0px 0px 1px  transparent',
      borderRadius: '4px',
      backgroundColor: "white"
    },
    '& .MuiInputBase-root:hover': {
      margin: `0px`,
      border:`1px solid ${darkGrey}`,
      borderRadius: '4px'
    },
    '& .MuiInputBase-root:focus': {
      margin: `0px`,
      border: theme => `1px solid ${theme.secondaryColor}`,
      borderRadius: '4px'
    },
    '& .MuiInputBase-root.Mui-focused': {
      margin: `0px`,
      border: theme => `1px solid ${theme.secondaryColor}`,
      borderRadius: '4px'
    },
    '& .MuiFormLabel-root.Mui-error': {
      color: theme => theme.errorColor
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
      padding: '0px 10px'
    },
    "& .MuiFilledInput-inputAdornedStart": {
      padding: "0px 10px 0px 0px"
    },
    "& .MuiFilledInput-inputAdornedEnd": {
      padding: "0px 0px 0px 10px"
    },
    '& .MuiFilledInput-input::placeholder': {
      fontSize: '14px'
    },
    '& .MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)': {
      marginTop: '0px !important'
    }
  },
  inputValidated: {
    '& .MuiInputBase-root': {
      border: theme => `1px solid ${theme.validColor}`,
    },
    '& .MuiInputBase-root:hover': {
      border: theme =>`1px solid ${theme.validColor}`,
    }
  },
  inputError: {
    '& .MuiInputBase-root:hover': {
      border: theme => `1px solid ${theme.errorColor}`
    }
  },
  inputLarge: {
    '& .MuiInputBase-root': {
      minHeight: "48px" 
    }
  },
  inputMedium: {
    '& .MuiInputBase-root': {
      minHeight: "40px" 
    }
  },
  inputSmall: {
    '& .MuiInputBase-root': {
      minHeight: "32px"
    }
  },
  inputDisabled: {
    '& .MuiInputBase-root:hover': {
      border:`1px solid ${disabledColor}`,
    },
    '& .MuiSelect-root': {
      backgroundColor: disabledColor,
      color: "#676879"
    }
  },
  inputWithClear: {
    "& .MuiFilledInput-inputAdornedEnd": {
      padding: "0px 15px 0px 10px"
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
    color: darkGrey
  },
  clearError: {
    color: theme => theme.errorColor 
  },
  validated: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    marginTop: '-12px',
    color: theme => theme.validColor
  }
})
