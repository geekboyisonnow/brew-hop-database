import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tabs from './Tabs'
import './App.css';

class Crawl extends Component {
  render() {
    return (
    <>
    <div id="content">
      <div class="bars">
        <div class="list"><strong><u>Order</u></strong></div>
        <div class="list">1</div>
        <div class="list">2</div>
        <div class="list">3</div>
        <div class="list">4</div>
        <div class="list">5</div>
      </div>
      <div class="bars">
        <div class="list"><strong><u>Pub Crawl</u></strong></div>
        <div class="list"><a href="bars.html" >Soggy Bottom Brewing</a></div>
        <div class="list"><a href="bars.html" >7venth Sun</a></div>
        <div class="list"><a href="bars.html" >Dunedin Brewery</a></div>
        <div class="list"><a href="bars.html" >Caledonia Brewery</a></div>
        <div class="list"><a href="bars.html" >Woodwright Brewing Company</a></div>
      </div>
    </div>
  </>
    )
  }
}

export default Crawl;