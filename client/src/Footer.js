import React, { Component } from 'react'
import './App.css';

class Footer extends Component {
  render() {
    return (
        
        <div className="footer">
        <div id="ride">
      
        
          <button id="uber"><a href="https://www.uber.com/"><strong>Uber</strong></a></button>
          <button id="uber"><a href="https://www.lyft.com/"><strong>Lyft</strong></a></button>
        </div>
      <div className="dreamlight"><strong>dreamlight <i className="far fa-lightbulb" ></i> development &copy; 2018</strong></div>
  
      </div>
    )
  }
}

export default Footer