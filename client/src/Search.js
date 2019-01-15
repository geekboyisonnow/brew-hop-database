import React, { Component } from 'react'
import './App.css';

class Search extends Component {
  render() {
    return (
      <div class="search">
        <input id="input" type="text" name="search" placeholder="Location or Bar Search..." /><button id="search"><strong>Search</strong></button>
        </div>
    )
  }
}

export default Search