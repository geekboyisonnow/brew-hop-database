import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tabs from './Tabs'
import './App.css';

class Crawl extends Component {
  render() {
    return (
    <>
    <div id="content">
      <div className="bars">
        <div className="list"><strong><u>#</u></strong></div>
        <div className="list">1</div>
        <div className="list">2</div>
        <div className="list">3</div>
        <div className="list">4</div>
        <div className="list">5</div>
      </div>
      <div className="bars">
        <div className="list"><strong><u>Pub Crawl</u></strong></div>
        <div className="list"><a href="bars.html" >Soggy Bottom Brewing</a></div>
        <div className="list"><a href="bars.html" >7venth Sun</a></div>
        <div className="list"><a href="bars.html" >Dunedin Brewery</a></div>
        <div className="list"><a href="bars.html" >Caledonia Brewery</a></div>
        <div className="list"><a href="bars.html" >Woodwright Brewing Company</a></div>
      </div>
    </div>
  </>
    )
  }
}

export default Crawl;