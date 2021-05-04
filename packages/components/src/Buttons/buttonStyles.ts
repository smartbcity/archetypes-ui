import { Theme } from '@smartb/archetypes-ui-themes'
import { lowLevelStyles } from '@smartb/archetypes-ui-themes'

export const containedUseStyles = (theme: Theme) =>
  lowLevelStyles({
    root: {
      minWidth: '80px',
      padding: '7px 12px',
      fontSize: '0.85rem',
      borderRadius: '4px',
      textTransform: 'none',
      boxShadow: theme.shadows[1],
      color: '#ffffff'
    },
    defaultColor: {
      background: theme.secondaryColor,
      '&:hover': {
        background: theme.secondaryColor
      },
      '&.Mui-disabled': {
        color: '#ffffff'
      }
    },
    success: {
      background:  theme.validColor,
      '&:hover': {
        background: theme.validColor
      },
      '&.Mui-disabled': {
        color: '#ffffff'
      }
    },
    fail: {
      background: theme.errorColor,
      '&:hover': {
        background: theme.errorColor
      },
      '&.Mui-disabled': {
        color: '#ffffff'
      }
    },
    advertissement: {
      background: theme.warningColor,
      '&:hover': {
        background: theme.warningColor
      },
      '&.Mui-disabled': {
        color: '#ffffff'
      }
    },
    buttonProgress: {
      color: 'white',
      marginRight: 5
    },
    icon: {
      marginRight: 5
    },
    disabled: {
      opacity: '0.7'
    }
  })

export const outlinedUseStyles = (theme: Theme) =>
  lowLevelStyles({
    root: {
      minWidth: '80px',
      padding: '7px 12px',
      fontSize: '0.85rem',
      textTransform: 'none',
      backgroundColor: '#ffffff',
      borderRadius: '4px',
      boxShadow: theme.shadows[1],
      '&:hover': {
        backgroundColor: `rgba(0, 0, 0, 0.04)`
      }
    },
    defaultColor: {
      border: `1px solid ${theme.secondaryColor}`,
      color: theme.secondaryColor,
      '& span': {
        color: theme.secondaryColor
      },
      '&.Mui-disabled': {
        color: theme.secondaryColor
      }
    },
    success: {
      border: `1px solid ${theme.validColor}`,
      color:  theme.validColor,
      '& span': {
        color:  theme.validColor
      },
      '&.Mui-disabled': {
        color:  theme.validColor
      }
    },
    fail: {
      border: `1px solid ${theme.errorColor}`,
      color: theme.errorColor,
      '& span': {
        color: theme.errorColor
      },
      '&.Mui-disabled': {
        color: theme.errorColor
      }
    },
    advertissement: {
      border: `1px solid ${theme.warningColor}`,
      color: theme.warningColor,
      '& span': {
        color: theme.warningColor
      },
      '&.Mui-disabled': {
        color: theme.warningColor
      }
    },
    buttonProgress: {
      color: theme.secondaryColor,
      marginRight: 5
    },
    icon: {
      marginRight: 5
    },
    disabled: {
      opacity: '0.7'
    }
  })

export const textUseStyles = (theme: Theme) => lowLevelStyles({
  root: {
    minWidth: '80px',
    padding: '7px 12px',
    fontSize: '0.85rem',
    textTransform: 'none',
    background: 'transparent',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: `rgba(0, 0, 0, 0.04)`
    }
  },
  defaultColor: {
    color: '#828282',
    '& span': {
      color: '#828282'
    },
    '&.Mui-disabled': {
      color: '#828282'
    }
  },
  success: {
    color: theme.validColor,
    '& span': {
      color: theme.validColor
    },
    '&.Mui-disabled': {
      color: theme.validColor
    }
  },
  fail: {
    color: theme.errorColor,
    '& span': {
      color: theme.errorColor
    },
    '&.Mui-disabled': {
      color: theme.errorColor
    }
  },
  advertissement: {
    color: theme.warningColor,
    '& span': {
      color: theme.warningColor
    },
    '&.Mui-disabled': {
      color: theme.warningColor
    }
  },
  buttonProgress: {
    color: '#828282',
    marginRight: 5
  },
  icon: {
    marginRight: 5
  },
  disabled: {
    opacity: '0.7'
  }
})
