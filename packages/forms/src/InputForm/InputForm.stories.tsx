import React, { useState } from 'react'
import {InputForm, InputFormProps} from './InputForm'
import { Option } from '../Select'
import {Meta} from "@storybook/react";
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/InputForm',
  component: InputForm,
} as Meta;

export const InputFormStory: Story<InputFormProps>  = () => {
  const [value, setValue] = useState('')

  const options: Option[] = [
    {
      value: 1,
      label: 'Basile'
    },
    {
      value: 2,
      label: 'Mathis'
    }
  ]
  return (
    <>
    <InputForm
      label='Votre nom:'
      value={value}
      inputType='textField'
      selectOptions={options}
      onChange={(value: String) => {
        setValue(value as string)
      }}
      id='test'
      placeHolder='ex Basile Savouret'
      style={{ width: '400px', margin: '50px' }}
    />
    <InputForm
      label='Votre nom:'
      value={value}
      inputType='textField'
      selectOptions={options}
      onChange={(value: String) => {
        setValue(value as string)
      }}
      id='test'
      placeHolder='ex Basile Savouret'
      error={true}
      errorMessage={'Champs obligatoire'}
      style={{ width: '400px', margin: '50px' }}
      inputStyle={{ width: '250px' }}
    />
    <InputForm
      label='Votre nom:'
      value={value || 'Read Only'}
      inputType='textField'
      selectOptions={options}
      onChange={(value: String) => {
        setValue(value as string)
      }}
      id='test'
      placeHolder='ex Basile Savouret'
      errorMessage={'Champs obligatoire'}
      style={{ width: '400px', margin: '50px' }}
      inputStyle={{ width: '250px' }}
      readonly={true}
    />

    <InputForm
      label='Votre nom:'
      value={value}
      inputType='select'
      selectOptions={options}
      onChange={(value: String) => {
        setValue(value as string)
      }}
      id='test'
      placeHolder='ex Basile Savouret'
      style={{ width: '400px', margin: '50px' }}
      inputStyle={{ width: '250px' }}
    />
    <InputForm
      label='Votre nom:'
      value={value}
      inputType='select'
      selectOptions={options}
      onChange={(value: String) => {
        setValue(value as string)
      }}
      id='test'
      placeHolder='ex Basile Savouret'
      error={true}
      errorMessage={'Champs obligatoire'}
    />
    <InputForm
      label='Votre nom:'
      value={'Read Only'}
      inputType='select'
      selectOptions={options || 1}
      onChange={(value: String) => {
        setValue(value as string)
      }}
      id='test'
      placeHolder='ex Basile Savouret'
      errorMessage={'Champs obligatoire'}
      style={{ width: '400px', margin: '50px' }}
      readonly={true}
    />
    </>
  )
}

InputFormStory.storyName = "InputForm"
