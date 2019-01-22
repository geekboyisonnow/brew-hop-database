import React, { Component } from "react";
import axios from "axios";
import Logo from "./Logo-Circle-4.png";
import Map from './Map'
import "./App.css";

class BarMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: props.search,
      bars: [],
      other: [],
      selected_bar: {},
      userLocation: null,
      selectedLocation: null
    };
  }

  getURL = () => {
    let url = `/bars.json?`
    
    if (this.props.kind) {
      url = url + `&kind=${this.props.kind}`
    }

    const userLocation = this.state.userLocation

    if (userLocation && userLocation.latitude && userLocation.longitude) {
      url = url + `&latitude=${userLocation.latitude}&longitude=${
        userLocation.longitude
      }`
    }

    if (this.state.search) {
      url = url + `&search=${this.state.search}`
    }

    return url
  }

  getBars = () => {
    axios.get(this.getURL()).then(response => {
      console.log(response.data)
      this.setState({
        bars: response.data
      });
    });
  };

  componentWillReceiveProps = (nextProps) => {
    this.setState({ search: nextProps.search }, () => { this.getBars() })
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
        <p>{this.state.selectedLocation.name}</p>
        <p>{this.state.selectedLocation.location}</p>
        <p>{this.state.selectedLocation.hours}</p>
        <p>{this.state.selectedLocation.rating.toFixed(2)}</p>
      </div>
    );
  }

  setSelectedLocation = location => {
    this.setState({ selectedLocation: location });
  };

  onClickMarker = (bar) => {
    this.setState({
      selected_bar: bar
    })
    console.log('you clicked on')
    console.log(bar)
  }

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
        <div>
            <div className="map">
              <Map onClickMarker={this.onClickMarker} bars={this.state.bars}/>
            </div>
          <div id="content">
          <div className="bars">
            <div className="list">
              <strong>
                <u>Dives</u>
              </strong>
            </div>
            <div className="list">
              {this.state.bars.map(bar => {
                return <div key={bar.id}>{bar.name}</div>;
              })}
            </div>
          </div>
          <div className="bars">
            <div className="list">
              <strong>
                <u>Rating</u>
              </strong>
            </div>
            <div className="rating-list">
              {this.state.bars.map(bar => {
                return <div key={bar.id}>{bar.stars.toFixed(1)}</div>;
              })}
            </div>
          </div>
        </div>
        </div>
      );
    }
  }
}

export default BarMap;
