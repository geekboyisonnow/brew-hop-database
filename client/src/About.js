import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from './Home';
// import Header from './Header';
// import Search from './Search';
// import Tabs from './Tabs';
// import Map from './Map';
// import Breweries from './Breweries'
// import Footer from './Footer';
import './App.css';

class About extends Component {
  render() {
    return (
        <div id="splash">
        <div class="title">
      <strong>Welcome to the <em>Brew Hop</em> App!</strong>
    </div>
    <div class="tagline">
      <p>Search for local Breweries... Hard to find Dive Bars... Let Brew Hop plan your Pub Crawl...</p>
      <p>Please Drink Responsibily!</p>
    </div>  
     </div> 
    );
  }
}
export default About