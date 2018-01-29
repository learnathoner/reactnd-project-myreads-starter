import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookRating extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render () {
    const stars = []
    const rating = this.props.book.rating

    for (let i=0; i < 5; i++) {
      if (i < rating) {
      stars.push(<span className="fa fa-star checked"></span>)
      } else {
        stars.push(<span className="fa fa-star"></span>)
      }
    }

    console.log(stars)

    return (
      <div className="book-rating">
        { stars }
      </div>
    )
  }
}

export default BookRating