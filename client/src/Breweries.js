import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Tabs from './Tabs'
import './App.css';

class Breweries extends Component {
  constructor(props) {
    super(props)

    this.state = {
        locations: [
          {
              id: 1,
            bar_name: "Se7enth Sun",
            overall_rating: 4.5,
            location: "1415 Main St. Dunedin Fl 34698",
            latitude: 28.019405,
            latitude: -82.7667774285714,
            phone: "888-888-8888",
            hours: "1PM - 3AM",
            kind_of_bar: "Dive Bar"
          },
          {
              id: 2,
            bar_name: "Dunedin Brewery",
            overall_rating: 4.1256987412354212,
            location: "2220 Central Ave. St. Petersburg, FL",
            latitude: 27.7709555306122,
            latitude: -82.663427244898,
            phone: "",
            hours: "1",
            kind_of_bar: "Brewery Bar" 

          },
          {
              id: 3,
            bar_name: "Soggy Bottom Brewery",
            overall_rating: 5.5,
            location: "2222 Central Ave. St. Petersburg, FL",
            latitude: 27.7709551836735,
            latitude: -82.6634494693878	,
            phone: "",
            hours: "247",
            kind_of_bar: "Dive Bar" 
          }  
        ]
    }
}
render() {
return (

    <div id="content">
        <div className="bars">
            <div className="list"><strong><u>Breweries</u></strong></div>
            <div className="list">
            {this.state.locations.map(location => 
            <div key={location.id}>{location.bar_name}</div>)}
            </div>
        </div>
        <div className="bars">
            <div className="list"><strong><u>Rating</u></strong></div>
            <div className="list">
            {this.state.locations.map(location => 
            <div key={location.id}>{location.overall_rating}</div>)}
            </div>
        </div>
    </div>

)
}
}

export default Breweries;