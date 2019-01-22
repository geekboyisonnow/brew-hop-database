import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './App.css';

class Tabs extends Component {
  render() {
    return (
      <div className="tab">
    <Link to="/breweries"><button><strong>breweries</strong></button></Link>
    <Link to="/dives"><button className="tablinks" ><strong>dive bars</strong></button></Link>
    <Link to="/bars"><button className="tablinks" ><strong>local bars</strong></button></Link>
     
      </div>
    )
  }
}

export default Tabs;