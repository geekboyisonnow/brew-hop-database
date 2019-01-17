import React, { Component } from 'react'
import { Link } from "react-router-dom"
// import Breweries from './Breweries'
// import Dives from './Dives'
// import Pubs from './Pubs'
// import Crawl from './Crawl'
import './App.css';

class Tabs extends Component {
  render() {
    return (
      <div class="tab">
    <Link to="/breweries"><button><strong>breweries</strong></button></Link>
    <Link to="/dives"><button class="tablinks" ><strong>dive bars</strong></button></Link>
    <Link to="/crawl"><button class="tablinks" ><strong>pub crawl</strong></button></Link>
     
      </div>
    )
  }
}

export default Tabs;