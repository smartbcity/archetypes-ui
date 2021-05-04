import React, { useState } from 'react'
import {InputForm, InputFormBasicProps} from './InputForm'
import { Option } from '../Select'
import {Meta} from "@storybook/react";
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/InputForm',
  component: InputForm,
} as Meta;

export const InputFormStory: Story<InputFormBasicProps>  = () => {
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
      onRemoveValue={() => setValue("")}
      value={value}
      inputType='textField'
      onChange={(value: string) => {
        setValue(value)
      }}
      textFieldType="search"
      onSearch={() => console.log("search")}
      id='test'
      placeHolder='ex Basile Savouret'
      style={{ width: '400px', margin: '50px' }}
    />
    <InputForm
      label='Votre nom:'
      value={value}
      inputType='textField'
      onChange={(value: String) => {
        setValue(value as string)
      }}
      id='test'
      placeHolder='ex Basile Savouret'
      style={{ width: '400px', margin: '50px' }}
      validated
    />
    <InputForm
      label='Votre nom:'
      value={value || 'Read Only'}
      inputType='textField'
      onChange={(value: String) => {
        setValue(value as string)
      }}
      id='test'
      placeHolder='ex Basile Savouret'
      errorMessage={'Champs obligatoire'}
      style={{ width: '400px', margin: '50px' }}
      readonly={true}
    />

    <InputForm
      label='Votre nom:'
      value={value}
      inputType='select'
      onChange={(value: String) => {
        setValue(value as string)
      }}
      options={options}
      id='test'
      placeHolder='ex Basile Savouret'
      style={{ width: '400px', margin: '50px' }}
    />
    <InputForm
      label='Votre nom:'
      value={value}
      inputType='select'
      onChange={(value: String) => {
        setValue(value as string)
      }}
      options={options}
      id='test'
      placeHolder='ex Basile Savouret'
      error={true}
      errorMessage={'Champs obligatoire'}
    />
    <InputForm
      label='Votre nom:'
      value={'Read Only'}
      inputType='select'
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
