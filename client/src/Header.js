import React, { Component } from 'react'
import './App.css';
import Logo from './Logo-Circle-4.png';

class Header extends Component {
  render() {
    return (
      <div class="header">
      
      <img src={`${Logo}`} class="logo" alt=""/>
      <a href="index.html" class="brew-text">Brew Hop!</a>      
      </div>
    )
  }
}

export default Header