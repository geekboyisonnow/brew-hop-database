import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios'
import './App.css';


class Dives extends Component {
    constructor(props) {
        super(props)

        this.state = {
            url: '/bars',
            bars: [],
            userLocation: null,
            selectedLocation: null
        }
       
    }
    
    getBars = () => {
        axios.get(this.state.url).then(response => {
            this.setState({
                bars: response.data.bars
            })
        })
    }
        
    componentDidMount() {
        // Ask the browser to allow the user to choose to share it's location with us
        navigator.geolocation.getCurrentPosition(position => {
          // When they do, we will get a `position` variable
    
          // Set the userLocation in state to where the user is!
          this.setState(
            {
              userLocation: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
              },
              url: `/api/locations?latitude=${position.coords.latitude}&longitude=${
                position.coords.longitude
              }`
            },
            () => {
              this.getBars()
            }
          )
        })
    
        this.getBars()
      }
    
      renderSelectedLocation() {
        if (!this.state.selectedLocation) {
          return
        }
    
        return (
          <div>
            <p>{this.state.selectedLocation.bar_name}</p>
            <p>{this.state.selectedLocation.address}</p>
            <p>{this.state.selectedLocation.hours}</p>
            <p>{this.state.selectedLocation.rating}</p>
          </div>
        )
      }
    
      setSelectedLocation = location => {
        this.setState({ selectedLocation: location })
      }
    
      render() {
        return (
    
        <div id="content">
            <div className="bars">
                <div className="list"><strong><u>Dives</u></strong></div>
                <div className="list">
                {this.state.bars.map(bar => 
                <div key={bar.id}>
                {bar.name}
                </div>)}
                </div>
            </div>
            <div className="bars">
                <div className="list"><strong><u>Rating</u></strong></div>
                <div className="list">
                {this.state.bars.map(bar => 
                <div key={bar.id}>{bar.rating}</div>)}
                </div>
            </div>
        </div>
    
    )
  
}
}

export default Dives;

