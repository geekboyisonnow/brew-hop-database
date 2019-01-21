import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Search from './Search';
import Tabs from './Tabs';
// import Map from './Map';
import Breweries from './Breweries';
import Dives from './Dives';
import Crawl from './Crawl'
// import About from './About';
import Footer from './Footer';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import StaticMap from './map-example.PNG'


class App extends Component {
  render() {
    return (
      <Router>
      <div className="body">
        <Header />
        <Search />
        <Tabs />
        

        <Route path="/" exact component={Home} />
        <Route path="/breweries" component={Breweries} />
        <Route path="/dives" component={Dives} />
        <Route path="/crawl" component={Crawl} />

        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
