import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './App.css';
import Logo from './Logo-Circle-4.png';

class Header extends Component {
  render() {
    return (
      <div class="header">
      
      <img src={`${Logo}`} class="logo" alt=""/>
      <Link to="/" class="brew-text">Brew Hop!</Link>      
      </div>
    )
  }
}

export default Header