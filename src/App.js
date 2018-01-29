import React from "react"
import "./App.css"
import ListBooksContent from "./ListBooksContent"
import SearchPage from "./SearchPage"
import { Route, Link } from "react-router-dom"

const BooksApp = props => (
  <div className="app">
    <Route
      exact
      path="/"
      render={() => (
        <div className="home-page">
          <ListBooksContent />

          <div className="open-search">
            <Link to="/search">Add a Book</Link>
          </div>
        </div>
      )}
    />
    <Route path="/search" render={({ history }) => <SearchPage />} />
  </div>
)

export default BooksApp
