import React, { Component } from "react"
import BookRating from './BookRating'
import PropTypes from "prop-types"

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBook: PropTypes.func.isRequired
  }

  state = {
    shelf: this.props.book.shelf
  }

  handleChange(e) {
    this.setState({ shelf: e.target.value })
    this.props.updateBook(this.props.book, e.target.value)
  }

  render() {
    const book = this.props.book
    const thumb = book.imageLinks
      ? `url("${book.imageLinks.smallThumbnail}")`
      : 'url("http://via.placeholder.com/128x193?text=No%20Cover")'

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `${thumb}`
              }}
            />
            <div className="book-shelf-changer">
              <select
                value={this.state.shelf}
                onChange={e => {
                  this.handleChange(e)
                }}
              >
                <option value="none" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <BookRating book={book} />
          <div className="book-title">{book.title}</div>
          {book.authors && (
            <div className="book-authors">{book.authors.join(", ")}</div>
          )}
        </div>
      </li>
    )
  }
}

export default Book
