import React, { Component } from 'react'

// Needs to receive books prop from App.js


class BookShelves extends Component {

    render() {
        const books = this.props.books;

        const shelves = [
            {   className = 'currentlyReading', 
                heading: 'Currently Reading',
                books: []
            },
            {   className = 'read', 
                heading: 'Read',
                books: []
            },
            {   className = 'wantToRead', 
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
                                className={shelf.className}
                                heading={shelf.heading}
                                shelfBooks={shelf.books}
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