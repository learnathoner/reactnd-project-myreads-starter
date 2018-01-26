import React, { Component } from "react";
import Book from "./Book";
import PropTypes from "prop-types";

class SearchResults extends Component {
  static propTypes = {
    books: PropTypes.array,
    updateBook: PropTypes.func.isRequired
  };

  render() {
    const { books } = this.props;
    const rows = [];

    for (let book of books) {
      book.shelf = "none";
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
