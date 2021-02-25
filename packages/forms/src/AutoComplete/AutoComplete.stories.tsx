import React, {useState} from 'react'
import {AutoComplete, AutoCompleteProps} from './AutoComplete'
import {makeStyles} from '@material-ui/core'
import {Meta} from "@storybook/react";
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/AutoComplete',
  component: AutoComplete,
} as Meta;

interface Book {
  title: string
  author: string
  id: string
}

const useStyles = makeStyles(() => ({
  container: {
    width: 'fit-content'
  }
}))
const books: Book[] = [
  { title: 'SmartB Potter', author: 'JK Blockchain', id: 'b1' },
  { title: 'The Lord of the Bs', author: 'S.S.M. Tolkien', id: 'b2' },
  { title: 'Impact Wars', author: 'Carbon Lucas', id: 'b3' }
]

export const AutoCompleteStory: Story<AutoCompleteProps<Book>> = () => {
  const [book, setBooks] = useState<Book>({
    title: '',
    id: '',
    author: ''
  })
  const classes = useStyles()

  return (
    <AutoComplete
      options={books}
      defaultValue={book}
      id='test'
      onSearch={() => {}}
      onChangeSelectedElement={(book: Book) => {
        setBooks(book)
      }}
      label='Livre'
      noOptionsText={"Rechercher un livre"}
      getOptionLabel={(book) => book.title}
      placeholder='testt'
      className={classes.container}
      style={{
        width: 500
      }}
    />
  )
}

AutoCompleteStory.storyName = 'AutoComplete'
