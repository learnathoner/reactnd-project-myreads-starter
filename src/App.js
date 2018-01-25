import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    loaded: false
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
      this.setState({ loaded: true });
    })
  }

  render() {

    const updateBook = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => this.loadBooks());
    }

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage updateBook={updateBook}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            { this.state.loaded && (
              <BookShelves books={this.state.books} updateBook={updateBook}/>
            )}
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
