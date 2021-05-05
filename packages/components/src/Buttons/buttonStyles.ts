import { Theme } from '@smartb/archetypes-ui-themes'
import { lowLevelStyles } from '@smartb/archetypes-ui-themes'

export const containedUseStyles = lowLevelStyles<Theme>()({
    root: {
      minWidth: '80px',
      padding: '7px 12px',
      fontSize: '0.85rem',
      borderRadius: '4px',
      textTransform: 'none',
      boxShadow: theme => theme.shadows[1],
      color: '#ffffff'
    },
    defaultColor: {
      background: theme => theme.secondaryColor,
      '&:hover': {
        background: theme => theme.secondaryColor
      },
      '&.Mui-disabled': {
        color: '#ffffff'
      }
    },
    success: {
      background:  theme => theme.validColor,
      '&:hover': {
        background: theme => theme.validColor
      },
      '&.Mui-disabled': {
        color: '#ffffff'
      }
    },
    fail: {
      background: theme => theme.errorColor,
      '&:hover': {
        background: theme => theme.errorColor
      },
      '&.Mui-disabled': {
        color: '#ffffff'
      }
    },
    advertissement: {
      background: theme => theme.warningColor,
      '&:hover': {
        background: theme => theme.warningColor
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

export const outlinedUseStyles = lowLevelStyles<Theme>()({
    root: {
      minWidth: '80px',
      padding: '7px 12px',
      fontSize: '0.85rem',
      textTransform: 'none',
      backgroundColor: '#ffffff',
      borderRadius: '4px',
      boxShadow: theme => theme.shadows[1],
      '&:hover': {
        backgroundColor: `rgba(0, 0, 0, 0.04)`
      }
    },
    defaultColor: {
      border: theme => `1px solid ${theme.secondaryColor}`,
      color: theme => theme.secondaryColor,
      '& span': {
        color: theme => theme.secondaryColor
      },
      '&.Mui-disabled': {
        color: theme => theme.secondaryColor
      }
    },
    success: {
      border: theme => `1px solid ${theme.validColor}`,
      color:  theme => theme.validColor,
      '& span': {
        color:  theme => theme.validColor
      },
      '&.Mui-disabled': {
        color:  theme => theme.validColor
      }
    },
    fail: {
      border: theme => `1px solid ${theme.errorColor}`,
      color: theme => theme.errorColor,
      '& span': {
        color: theme => theme.errorColor
      },
      '&.Mui-disabled': {
        color: theme => theme.errorColor
      }
    },
    advertissement: {
      border: theme => `1px solid ${theme.warningColor}`,
      color: theme => theme.warningColor,
      '& span': {
        color: theme => theme.warningColor
      },
      '&.Mui-disabled': {
        color: theme => theme.warningColor
      }
    },
    buttonProgress: {
      color: theme => theme.secondaryColor,
      marginRight: 5
    },
    icon: {
      marginRight: 5
    },
    disabled: {
      opacity: '0.7'
    }
  })

export const textUseStyles = lowLevelStyles<Theme>()({
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
    color: theme => theme.validColor,
    '& span': {
      color: theme => theme.validColor
    },
    '&.Mui-disabled': {
      color: theme => theme.validColor
    }
  },
  fail: {
    color: theme => theme.errorColor,
    '& span': {
      color: theme => theme.errorColor
    },
    '&.Mui-disabled': {
      color: theme => theme.errorColor
    }
  },
  advertissement: {
    color: theme => theme.warningColor,
    '& span': {
      color: theme => theme.warningColor
    },
    '&.Mui-disabled': {
      color: theme => theme.warningColor
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
