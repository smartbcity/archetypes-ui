import {
  StepConnector as MuiStepConnector,
  withStyles
} from '@material-ui/core'
import { Theme } from '@smartb/archetypes-ui-components'

export const StepConnector = (theme: Theme) =>
  withStyles({
    alternativeLabel: {
      top: 20,
      left: 'calc(-50% + 30px)',
      right: 'calc(50% + 30px)'
    },
    active: {
      color: theme.hex.primaryColor,
      '& $line': {
        backgroundColor: theme.hex.primaryColor
      }
    },
    completed: {
      '& $line': {
        backgroundColor: theme.hex.primaryColor
      }
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: theme.hex.tertiaryColor,
      borderRadius: 1
    }
  })(MuiStepConnector)
