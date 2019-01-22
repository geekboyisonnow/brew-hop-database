import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Tabs from './Tabs'
import './App.css';

class Pubs extends Component {
  constructor(props) {
    super(props)

    this.state = {
        bar: [
          {
              id: 1,
            bar_name: "Random Bar 1",
            overall_rating: 4.5,
            address: "1415 Main St. Dunedin Fl 34698",
            latitude: 28.019405,
            latitude: -82.7667774285714,
            phone: "888-888-8888",
            hours: "1PM - 3AM",
            kind_of_bar: "Dive Bar"
          } 
        ]
    }
}
render() {
return (

    <div id="content">
        <div class="bars">
            <div class="list"><strong><u>Pub Crawl</u></strong></div>
            <div class="list">
            {this.state.bars.map(bar => 
            <div key={bar.id}>{bar.name}</div>)}
            </div>
        </div>
        <div class="bars">
            <div class="list"><strong><u>Rating</u></strong></div>
            <div class="list">
            {this.state.bars.map(bar => 
            <div key={bar.id}>{bar.stars}</div>)}
            </div>
        </div>
    </div>

)
}
}

export default Pubs;