import React, { Component } from 'react'
import './App.css';

class Footer extends Component {
  render() {
    return (
        
        <div className="footer">
        <div id="ride">
      
        
          <button id="uber"><strong>Uber</strong></button>
          <button id="uber"><strong>Lyft</strong></button>
        </div>
      <div className="dreamlight"><strong>dreamlight <i className="far fa-lightbulb" ></i> development &copy; 2018</strong></div>
  
      </div>
    )
  }
}

export default Footer