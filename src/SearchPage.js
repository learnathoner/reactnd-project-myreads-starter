import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import SearchResults from './SearchResults'
import { Link } from 'react-router-dom'

class SearchPage extends Component {
    state = {
        value: ''
    }

    handleChange(e) {
        let query = e.target.value
        this.setState({value: query})
        
        BooksAPI.search(query)
            .then((results) => this.setState({books: results}))
    }

    render () {
        return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
      
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.value} 
                onChange={(e) => this.handleChange(e)}
            />    
            </div>
          </div>
          {this.state.books && (
            <SearchResults books={this.state.books} updateBook={this.props.updateBook} />
            )}
        </div>
        )
    }
}

export default SearchPage