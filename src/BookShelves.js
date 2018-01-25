import React, { Component } from 'react'
import BookShelf from './BookShelf'

class BookShelves extends Component {

    render() {
        const books = this.props.books;

        const shelves = [
            {   className: 'currentlyReading', 
                heading: 'Currently Reading',
                books: []
            },
            {   className: 'read', 
                heading: 'Read',
                books: []
            },
            {   className: 'wantToRead', 
                heading: 'Want To Read',
                books: []
            }
        ];

        const bookShelves = [];

        // For each shelf, add books, then push Shelf component to bookshelf
        for (const shelf of shelves) {
        
            for (const book of books) {
                
                if (book.shelf === shelf.className) {
                    shelf.books.push(book);
                }
            }

            bookShelves.push(<BookShelf
                                key={shelf.className}
                                heading={shelf.heading}
                                books={shelf.books}
                                updateBook={this.props.updateBook}
                            />)

        }

        return (
            <div className="list-books-content">
                <div>
                    { bookShelves }        
                </div>
            </div>

        )
    }
}

export default BookShelves