import React, {useState} from 'react'
import {AutoComplete as AruiAutoComplete, AutoCompleteBasicProps} from './AutoComplete'
import {Meta} from "@storybook/react";
import {Story} from "@storybook/react/types-6-0";

export default {
  title: 'Forms/AutoComplete',
  component: AruiAutoComplete,
} as Meta;

interface Book {
  title: string
  author: string
  id: string
}

const books: Book[] = [
  { title: 'SmartB Potter', author: 'JK Blockchain', id: 'b1' },
  { title: 'The Lord of the Bs', author: 'S.S.M. Tolkien', id: 'b2' },
  { title: 'Impact Wars', author: 'Carbon Lucas', id: 'b3' },
  { title: 'Blockchainator', author: 'A strange guy', id: 'b4' },
  { title: 'Impactosorus', author: 'Greg beatcoyn', id: 'b5' }
]

export const AutoComplete: Story<AutoCompleteBasicProps<Book>> = (args: AutoCompleteBasicProps<Book>) => {
  const [book, setBooks] = useState<Book[]>([])

  return (
    <AruiAutoComplete<Book>
      defaultValue={book}
      onChangeSelectedElement={(book: Book | Book[]) => {
        if(Array.isArray(book)) setBooks(book)
        else setBooks([book])
      }}
      style={{
        width: 500
      }}
      {...args}
    />
  )
}

AutoComplete.args = {
  options: books,
  id: "test",
  noOptionsText: "Rechercher un livre",
  getOptionLabel: (book) => book.title
}

AutoComplete.storyName = 'AutoComplete'
