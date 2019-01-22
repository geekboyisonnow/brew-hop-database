import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Search from './Search';
import Tabs from './Tabs';
import BarMap from './BarMap';
import BarInfo from './BarInfo'
// import About from './About';
import Footer from './Footer';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: null
    }
  }

  doSearch = (search) => {
    this.setState({ search: search })
  }

  render() {
    return (
      <Router>
      <div className="body">
        <Header />
        <Search doSearch={this.doSearch}  />
        <Tabs />
        

        <Route path="/" exact component={Home} />
        <Route path="/breweries" render={(props) => <BarMap kind="brewery" {...props} search={this.state.search} />} />
        <Route path="/dives" render={(props) => <BarMap kind="dive" {...props} search={this.state.search} /> } />
        <Route path="/bars" render={(props) => <BarMap {...props} search={this.state.search} /> }/>
        <Route path="/barinfo" component={BarInfo} />

        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
