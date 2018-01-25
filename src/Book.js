import React, { Component } from 'react'

class Book extends Component {

    state = {
        shelf: this.props.book.shelf
    }

    handleChange(e) {
        this.setState({shelf: e.target.value});
        this.props.updateBook(this.props.book, e.target.value);
    }

    render() {
        const book = this.props.book        

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{ width: 128,
                                    height: 193,
                                    backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}
                        ></div>
                        <div className="book-shelf-changer">
                            <select 
                                value={this.state.shelf} 
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
                    {book.authors && (
                      <div className="book-authors">{ book.authors.join(', ')}</div>  
                    )}
                </div>
            </li>
        )
    }
}

export default Book