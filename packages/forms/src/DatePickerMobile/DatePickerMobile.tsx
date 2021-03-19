import React from 'react'
import { InputLabel } from '@material-ui/core'
import clsx from 'clsx'
import {
  BasicProps,
  lowLevelStyles,
  MergeReactElementProps,
  Theme,
  useTheme
} from '@smartb/archetypes-ui-themes'

const useStyles = (theme: Theme) =>
  lowLevelStyles({
    listLabel: {
      color: '#646464',
      fontWeight: 500,
      fontSize: '13px'
    },
    date: {
      boxShadow: theme.shadows[2],
      borderRadius: 25,
      position: 'relative',
      backgroundColor: '#fafafa',
      padding: '7px 13px',
      marginTop: '11px',
      fontSize: 12,
      fontWeight: 300,
      color: '#797979',
      minHeight: '26px',
      width: '200px',
      maxWidth: '100%',
      border: 'none',
      outline: 'none'
    }
  })

interface DatePickerClasses {
  label?: string
  input?: string
}

interface DatePickerStyles {
  label?: React.CSSProperties
  input?: React.CSSProperties
}

export interface DatePickerMobileBasicProps extends BasicProps {
  /**
   * The Date entered in the input
   */
  value?: string | Date
  /**
   * The label of the input
   */
  label?: string
  /**
   * The event called when the value of the input changed
   * @param date
   */
  onChange: (date: string) => void
  /**
   * The classes applied to the different part of the component
   */
  classes?: DatePickerClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: DatePickerStyles
}

export type DatePickerMobileProps = MergeReactElementProps<
  'input',
  DatePickerMobileBasicProps
>

export const DatePickerMobile = React.forwardRef(
  (props: DatePickerMobileProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      value,
      label,
      onChange,
      classes,
      styles,
      id,
      className,
      style,
      ...other
    } = props
    const theme = useTheme()
    const defaultClasses = useStyles(theme)()
    return (
      <div className={clsx(className, 'AruiDatePicker-root')} style={style}>
        {label && (
          <InputLabel
            htmlFor={id}
            className={clsx(
              defaultClasses.listLabel,
              'AruiDatePicker-label',
              classes?.label
            )}
            style={styles?.label}
          >
            {label}
          </InputLabel>
        )}
        <input
          ref={ref}
          id={id}
          value={value ? value.toString() : ''}
          onChange={(event) => onChange(event.target.value)}
          type='date'
          className={clsx(
            defaultClasses.date,
            'AruiDatePicker-input',
            classes?.input
          )}
          style={styles?.input}
          {...other}
        />
      </div>
    )
  }
)
