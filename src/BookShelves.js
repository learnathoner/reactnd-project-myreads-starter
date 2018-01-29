import React, { Component } from "react"
import BookShelf from "./BookShelf"
import PropTypes from "prop-types"

class BookShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }

  populateShelves(shelves) {
    const { books } = this.props
    const bookShelves = []

    // For each shelf, add books, then push Shelf component to bookshelf
    for (const shelf of shelves) {
      for (const book of books) {
        if (book.shelf === shelf.className) {
          shelf.books.push(book)
        }
      }

      bookShelves.push(
        <BookShelf
          key={shelf.className}
          heading={shelf.heading}
          books={shelf.books}
          updateBook={this.props.updateBook}
        />
      )
    }

    return bookShelves
  }

  render() {
    const shelves = [
      {
        className: "currentlyReading",
        heading: "Currently Reading",
        books: []
      },
      {
        className: "read",
        heading: "Read",
        books: []
      },
      {
        className: "wantToRead",
        heading: "Want To Read",
        books: []
      }
    ]

    const bookShelves = this.populateShelves(shelves)

    return <div>{bookShelves}</div>
  }
}

export default BookShelves
