import React, { Component } from 'react'

// Needs to receive books prop from App.js


class BookShelf extends Component {

    render() {

        const shelves = {
            currentlyReading: {
                title: 'Currently Reading',
                rows: []
            },
            read: {
                title: 'Read',
                rows: []
            },
            wantToRead: {
                title: 'Want To Read',
                rows: []
            }
        }

        let lastCategory = null;

        this.props.books.forEach((book) => {
            shelves[book.shelf].rows.push(<Book book={book} />)
        })

        return (
            <div className="bookshelf">
                
            </div>

        )
    }
}

export default BookShelf