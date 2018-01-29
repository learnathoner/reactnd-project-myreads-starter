import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class SearchResults extends Component {
  static propTypes = {
    myBooks: PropTypes.object.isRequired,
    searchBooks: PropTypes.array,
    updateBook: PropTypes.func.isRequired
  };

  render() {
    const { myBooks, searchBooks } = this.props;
    const rows = [];

    for (let book of searchBooks) {
      
      if (book.id in myBooks) {
        book.shelf = myBooks[book.id].shelf;
      } else {
        book.shelf = 'none';
      }

      rows.push(
        <Book book={book} updateBook={this.props.updateBook} key={book.id} />
      );
    }

    return (
      <div className="search-books-results">
        <ol className="books-grid">{rows}</ol>
      </div>
    );
  }
}

export default SearchResults;