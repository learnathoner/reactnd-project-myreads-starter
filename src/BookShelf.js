import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    
    render () {

        const { heading, books } = this.props;
        const bookGrid = [];   

        for (const book of books) {
            bookGrid.push(<Book book={book} updateBook={this.props.updateBook} key={book.id} />)
        }

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{heading}</h2>
                <ol className="books-grid">
                    { bookGrid }
                </ol>                
            </div>
        )
    }
}

export default BookShelf