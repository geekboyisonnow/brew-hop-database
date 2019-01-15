import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Tabs from './Tabs'
import './App.css';

class Crawl extends Component {
  render() {
    return (
    <>
    <div class="bars">
    <div class="list"><strong><u>Crawl:</u></strong></div>
    <div class="list"><a href="bars.html" >Soggy Bottom Brewing</a></div>
    <div class="list"><a href="bars.html" >7venth Sun</a></div>
    <div class="list"><a href="bars.html" >Dunedin Brewery</a></div>
    <div class="list"><a href="bars.html" >Caledonia Brewery</a></div>
    <div class="list"><a href="bars.html" >Woodwright Brewing Company</a></div>
  </div>
  <div class="bars">
      <div class="list"><strong><u>Distance:</u></strong></div>
      <div class="list">0.5 Miles</div>
      <div class="list">0.75 Miles</div>
      <div class="list">1.1 Miles</div>
      <div class="list">1.25 Miles</div>
      <div class="list">3 Miles</div>
    </div>
  </>
    )
  }
}

export default Crawl;