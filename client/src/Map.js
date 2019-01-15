import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import pic from './map-example.PNG'

class Map extends Component {
  render() {
    return (
      <div>
        <img src={`${pic}`} width="100%" alt=""/>
      </div>
    )
  }
}

export default Map