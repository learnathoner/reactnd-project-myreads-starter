import React from "react"
import Book from "./Book"
import PropTypes from "prop-types"

const BookShelf = props => {
  const bookGrid = []

  for (const book of props.books) {
    if (!book.rating) { book.rating = 3 }

    bookGrid.push(
      <Book book={book} updateBook={props.updateBook} key={book.id} />
    )
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.heading}</h2>
      <ol className="books-grid">{bookGrid}</ol>
    </div>
  )
}

BookShelf.propTypes = {
  heading: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
}

export default BookShelf
