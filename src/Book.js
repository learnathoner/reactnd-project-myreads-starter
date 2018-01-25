import React, { Component } from 'react'

class Book extends Component {

    state = {
        value: this.props.book.shelf
    }

    handleChange(e) {
        this.setState({value: e.target.value});
        this.props.updateBook(this.props.book, e.target.value);
    }

    render() {
        const book = this.props.book

        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{ width: 128,
                                    height: 193,
                                    backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}
                        ></div>
                        <div className="book-shelf-changer">
                            <select 
                                value={this.state.value} 
                                onChange={(e) => { this.handleChange(e) }}
                            >
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{ book.title }</div>
                    <div className="book-authors">{ book.authors.join(', ')}</div>
                </div>
            </li>
        )
    }
}

export default Book