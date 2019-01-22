import React, { Component } from 'react'
import './App.css';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: null
    }
  }
  
  onChange = (event) => {
    this.setState({ search: event.target.value })
  }

  doSearch = () => {
    this.props.doSearch(this.state.search)
  }

  render() {
    return (
      <div className="search">
        <input id="input"
          onChange={this.onChange}
          value={this.state.search}
          type="text"
          name="search"
          placeholder="Location or Bar Search..." />
        <button id="search" onClick={this.doSearch}>
          <strong>Search</strong>
        </button>
      </div>
    )
  }
}

export default Search