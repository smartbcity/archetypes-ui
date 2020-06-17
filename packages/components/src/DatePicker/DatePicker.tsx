import React, { useContext } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { InputLabel } from '@material-ui/core'
import {
  Theme,
  themeContext
} from '../ThemeContextProvider/ThemeContextProvider'
import clsx from 'clsx'
import { BasicProps, MergeReactElementProps } from '../Types'

const useStyles = (theme: Theme) =>
  makeStyles(() =>
    createStyles({
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
  )

interface DatePickerClasses {
  label?: string
  input?: string
}

interface DatePickerStyles {
  label?: React.CSSProperties
  input?: React.CSSProperties
}

interface DatePickerProps extends BasicProps {
  value?: string | Date
  label?: string
  onChange: (date: string) => void
  classes?: DatePickerClasses
  styles?: DatePickerStyles
}

type Props = MergeReactElementProps<'input', DatePickerProps>

export const DatePicker = React.forwardRef(
  (props: Props, ref: React.Ref<HTMLInputElement>) => {
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
    const theme = useContext(themeContext)
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
