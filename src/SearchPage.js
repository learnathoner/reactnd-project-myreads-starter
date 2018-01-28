import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class SearchPage extends Component {
  static propTypes = {
    updateBook: PropTypes.func.isRequired
  };

  state = {
    query: "",
    myBooks: [],
    searchBooks: [],
    loaded: false
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    BooksAPI.getAll().then(books => {
      // Creates myBooks object, which maps each book's ID to its object
      // Makes it easier to look up books you have on a shelf and compare to search results
      const myBooks = {};

      for (const book of books) {
        myBooks[book.id] = book;
      }

      this.setState({ myBooks });
      this.setState({ loaded: true });
    });
  }

  handleChange(e) {
    let query = e.target.value;
    this.setState({ query: query });

    // If there is a query, calls BooksAPI search
    // After results, checks that there's no error and that query hasn't changed while fetching
    // If no query, query changed, or error - sets books to empty array
    if (query.length > 0) {
      BooksAPI.search(query).then(results => {
        if ((!results.error) && (query === this.state.query)) {
          this.setState({ searchBooks: results });
          return;
        }
      });
    } 
    
    this.setState({ searchBooks: [] });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={e => this.handleChange(e)}
            />
          </div>
        </div>
        {this.state.loaded && (
          <SearchResults
            myBooks = {this.state.myBooks}
            searchBooks={this.state.searchBooks}
            updateBook={this.props.updateBook}
          />
        )}
      </div>
    );
  }
}

export default SearchPage;
