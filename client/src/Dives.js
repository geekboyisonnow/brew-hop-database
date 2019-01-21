import React, { Component } from "react";
import axios from "axios";
import Logo from "./Logo-Circle-4.png";
import Map from './Map'
import "./App.css";

class Dives extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "/bars.json?kind=dive",
      bars: [],
      other: [],
      userLocation: null,
      selectedLocation: null
    };
  }

  getBars = () => {
    axios.get(this.state.url).then(response => {
      console.log(response.data)
      this.setState({
        bars: response.data
      });
    });
  };

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
          url: `/bars.json?kind=dive&latitude=${position.coords.latitude}&longitude=${
            position.coords.longitude
          }`
        },
        () => {
          this.getBars();
        }
      );
    });

    this.getBars();
  }

  renderSelectedLocation() {
    if (!this.state.selectedLocation) {
      return;
    }

    return (
      <div>
        <p>{this.state.selectedLocation.bar_name}</p>
        <p>{this.state.selectedLocation.address}</p>
        <p>{this.state.selectedLocation.hours}</p>
        <p>{this.state.selectedLocation.rating}</p>
      </div>
    );
  }

  setSelectedLocation = location => {
    this.setState({ selectedLocation: location });
  };

  render() {
    if (!this.state.bars) {
      // console.log('no data')
      return (
        <div id="content">
          <p>Dive Bars</p>
          <p>Should Be Dynamically</p>
          <p>Listed Here!!!</p>
        </div>
      );
    } else {
      // console.log(this.state.bars)
      return (
        <div id="content">
          <div className="bars">
            <div className="list">
              <strong>
                <u>Dives</u>
              </strong>
            </div>
            <div className="list">
              {this.state.bars.map(bar => {
                return <div key={bar.id}>{bar.name} {bar.stars}</div>;
              })}
            </div>
          </div>
          <div className="bars">
            <div className="list">
              <strong>
                <u>Rating</u>
              </strong>
            </div>
            <div className="list">
              {this.state.bars.map(bar => {
                return <div key={bar.id}>{bar.stars}</div>;
              })}
            </div>
            <div className="map">
              <Map bars={this.state.bars}/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Dives;
