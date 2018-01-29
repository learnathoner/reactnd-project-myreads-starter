import React, { Component } from "react"
import BookShelves from "./BookShelves"
import * as BooksAPI from "./BooksAPI"

class ListBooksContent extends Component {
  state = {
    loaded: false,
    books: []
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
      this.setState({ loaded: true })
    })
  }

  render() {

    const updateBook = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => this.loadBooks())
    }

    const updateRating = (book, rating) => {
      BooksAPI.updateRating(book, rating).then(() => this.loadBooks())
    }

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {this.state.loaded && (
            <BookShelves 
              books={this.state.books} 
              updateBook={updateBook} 
              updateRating={updateRating} />
          )}
        </div>
      </div>
    )
  }
}

export default ListBooksContent
