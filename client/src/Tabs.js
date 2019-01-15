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
    <button class="tablinks" ><Link to="/dives"><strong>dive bars</strong></Link></button>
    <button class="tablinks" ><Link to="/crawl"><strong>pub crawl</strong></Link></button>
     
      </div>
    )
  }
}

export default Tabs;