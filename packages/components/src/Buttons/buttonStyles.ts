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
      boxShadow: theme.shadows[2],
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
      background: '#4caf50',
      '&:hover': {
        background: '#4caf50'
      },
      '&.Mui-disabled': {
        color: '#ffffff'
      }
    },
    fail: {
      background: '#EC8A90',
      '&:hover': {
        background: '#EC8A90'
      },
      '&.Mui-disabled': {
        color: '#ffffff'
      }
    },
    advertissement: {
      background: '#FFB26B',
      '&:hover': {
        background: '#FFB26B'
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
      boxShadow: theme.shadows[2],
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
      border: '1px solid #4caf50',
      color: '#4caf50',
      '& span': {
        color: '#4caf50'
      },
      '&.Mui-disabled': {
        color: '#4caf50'
      }
    },
    fail: {
      border: '1px solid #EC8A90',
      color: '#EC8A90',
      '& span': {
        color: '#EC8A90'
      },
      '&.Mui-disabled': {
        color: '#EC8A90'
      }
    },
    advertissement: {
      border: '1px solid #FFB26B',
      color: '#FFB26B',
      '& span': {
        color: '#FFB26B'
      },
      '&.Mui-disabled': {
        color: '#FFB26B'
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

export const textUseStyles = lowLevelStyles({
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
    color: '#4caf50',
    '& span': {
      color: '#4caf50'
    },
    '&.Mui-disabled': {
      color: '#4caf50'
    }
  },
  fail: {
    color: '#EC8A90',
    '& span': {
      color: '#EC8A90'
    },
    '&.Mui-disabled': {
      color: '#EC8A90'
    }
  },
  advertissement: {
    color: '#FFB26B',
    '& span': {
      color: '#FFB26B'
    },
    '&.Mui-disabled': {
      color: '#FFB26B'
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
