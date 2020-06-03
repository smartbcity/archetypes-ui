import { StepConnector, withStyles } from '@material-ui/core'
import { Theme } from '@smartb/archetypes-ui-components'

export const MeStepConnector = (theme: Theme) =>
  withStyles({
    alternativeLabel: {
      top: 20,
      left: 'calc(-50% + 30px)',
      right: 'calc(50% + 30px)'
    },
    active: {
      color: theme.primaryColor,
      '& $line': {
        backgroundColor: theme.primaryColor
      }
    },
    completed: {
      '& $line': {
        backgroundColor: theme.primaryColor
      }
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: theme.tertiaryColor,
      borderRadius: 1
    }
  })(StepConnector)
