import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookRating extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  }

  componentDidMount() {
    const ratingsID = `${this.props.book.id}_rating`
    const rating = document.getElementById(ratingsID)

    rating.addEventListener('click', (e) => {
      const starPosition = Number(e.target.id[e.target.id.length-1])
      const newRating = starPosition + 1

      this.props.updateRating(this.props.book, newRating)

      })

  }

  render () {
    const { book } = this.props
    const stars = []
    const rating = this.props.book.rating

    for (let i=0; i < 5; i++) {
      var id=`${book.id}_${i}`
      let classes

      if (i < rating) {
        classes="fa fa-star checked"
      } else {
        classes="fa fa-star"
      }
        
      stars.push(<span key={id} id={id} className={classes}></span>)
    }

    const ratingID = `${book.id}_rating`

    return (
      <div id={ ratingID } className="book-rating">
        { stars }
      </div>
    )
  }
}

export default BookRating