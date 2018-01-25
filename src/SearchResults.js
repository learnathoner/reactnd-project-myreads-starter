import React, { Component } from 'react'
import Book from './Book'

class SearchResults extends Component {

    render () {
        const { books } = this.props
        const rows = [];

        if (!books.error) {
            for (let book of books) {
                book.shelf = 'none';
                rows.push( <Book book={book} updateBook={this.props.updateBook}/>)
            }
        }


        return (
            <div className="search-books-results">
                <ol className="books-grid"> 
                    { rows }
                </ol>
            </div>        
        )
    }
}

export default SearchResults
          