import React from 'react';
import './App.css';

import Books from './Books';

const Bookshelf = (props) => {
  const { books, header, onShelfChange } = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{header}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books && books.map(book => (
            <Books
              key={book.id}
              book={book}
              onShelfChange={onShelfChange} />
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Bookshelf