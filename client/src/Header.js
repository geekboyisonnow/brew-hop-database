import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './App.css';
import Logo from './Logo-Circle-4.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
      
      <img src={`${Logo}`} className="logo" alt=""/>
      <Link to="/bars" className="brew-text">Brew Hop!</Link>      
      </div>
    )
  }
}

export default Header