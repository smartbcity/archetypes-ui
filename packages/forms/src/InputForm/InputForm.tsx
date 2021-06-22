import { Box, InputLabel } from '@material-ui/core'
import React, { useMemo } from 'react'
import { Select, SelectBasicProps, SelectProps, SelectClasses, SelectStyles } from '../Select'
import { TextField, TextFieldBasicProps, TextFieldProps, TextFieldClasses, TextFieldStyles } from '../TextField'
import { useInputStyles } from '../style'
import { BasicProps,useTheme } from '@smartb/archetypes-ui-themes'
import clsx from 'clsx'

type TextFieldBasic = Omit<TextFieldBasicProps, keyof SelectBasicProps | "disabled">

type CommonBasic = Omit<TextFieldBasicProps, keyof TextFieldBasic | "disabled">

interface InputFormClasses {
  label?: string
  input?: string
}

interface InputFormStyles {
  label?: React.CSSProperties
  input?: React.CSSProperties
}

export interface InputFormBasicProps<T extends 'select' | 'textField' = 'textField'> extends BasicProps, CommonBasic {
  /**
   * The label of the input
   */
  label?: string
  /**
   * The type of the input
   * @default "textField"
   */
  inputType: 'select' | 'textField'
  /**
   * If true the autocomplete will be disabled
   * @default false
   */
  readonly?: boolean
  /**
 * The classes applied to the different part of the component
 */
  classes?: InputFormClasses
  /**
   * The styles applied to the different part of the component
   */
  styles?: InputFormStyles
  /**
 * The classes applied to the different part of the input
 * 
 * The type will be equal to the classes type of the input selected:
 * **See the reference below** ⬇️
 */
  inputClasses?: [T] extends ['select'] ? SelectClasses : TextFieldClasses
  /**
   * The styles applied to the different part of the input
   * 
   * The type will be equal to the classes type of the input selected:
   * **See the reference below** ⬇️
   */
  inputStyles?: [T] extends ['select'] ? SelectStyles : TextFieldStyles
}

type InputFormComponentProps<T extends 'select' | 'textField' = never, R extends Boolean = false> = InputFormBasicProps & ([T] extends ['select'] ? [R] extends [true] ? TextFieldProps : SelectProps : [T] extends ['textField'] ? TextFieldProps : {})

interface InputFormComponent {
  <T extends 'select' | 'textField', R extends Boolean = false>(
    props: {
      inputType: T
      readonly?: R
    } & InputFormComponentProps<T, R>,
    ref: React.ForwardedRef<HTMLDivElement>
  ): JSX.Element;
}

export type InputFormProps = InputFormBasicProps & Omit<TextFieldProps, keyof InputFormBasicProps> & Omit<SelectProps, keyof InputFormBasicProps> & {
  inputClasses?: SelectClasses | TextFieldClasses
  inputStyles?: SelectStyles | TextFieldStyles
}

//@ts-ignore
export const InputForm: InputFormComponent = React.forwardRef((props: Partial<InputFormProps>, ref: React.ForwardedRef<HTMLDivElement>) => {
  const {
    inputType = "textField",
    readonly = false,
    className,
    style,
    label,
    id,
    classes,
    styles,
    inputClasses,
    inputStyles,
    ...other
  } = props
  const theme = useTheme()
  const defaultClasses = useInputStyles(theme)

  const labelUi = useMemo(() => {
    return label ? (
      <InputLabel htmlFor={id} className={clsx(defaultClasses.label, classes?.label)} style={styles?.label}>
        {label}
      </InputLabel>
    ) : null;
  }, [label, classes?.label, id, styles?.label])

  const inputUi = useMemo(() => {
    return readonly ? (
      <TextField
        {...other}
        className={classes?.input}
        style={styles?.input}
        classes={inputClasses}
        styles={inputStyles}
        ref={ref}
        id={id}
        disabled={true}
      />
    ) : inputType === 'textField' ? (
      <TextField
        {...other}
        className={classes?.input}
        style={styles?.input}
        classes={inputClasses}
        styles={inputStyles}
        ref={ref}
        id={id}
      />
    ) : (
      <Select
        {...other}
        className={classes?.input}
        style={styles?.input}
        classes={inputClasses}
        styles={inputStyles}
        ref={ref}
        id={id}
      />
    )
  }, [readonly, inputType, classes?.input, id, styles?.input, ref, Object.values({ ...other })])

  return (
    <Box className={className} style={style}>
      {labelUi}
      {inputUi}
    </Box>
  )
})
