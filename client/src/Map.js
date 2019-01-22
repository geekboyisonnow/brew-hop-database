import React, {Component} from 'react'
import './App.css';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import userPin from './bar-pin.png'
// import locationInfo from './location-info'
// import ControlPanel from './control-panel';
// import CITIES from '../../data/cities.json';

// const TOKEN = ''; // Set your mapbox token here

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
}

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popupInfo: null,
      viewport: {
        latitude: 27.7676,
        longitude: -82.6403,
        zoom: 12.5,
        bearing: 0,
        pitch: 0
      }
    }
  }

  _updateViewport = newViewport => {
    this.setState({ viewport: newViewport })
  }

  renderPopup = () => {
    const popupInfo = this.state.popupInfo

    if (!popupInfo) {
      return
    }

    return (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        closeOnClick={false}
        onClose={() => {
          this.props.onClickMarker({})
          this.setState({ popupInfo: null })
        }}
      >
        <div>
          <p>{popupInfo.name}</p>
          <p>{popupInfo.location}</p>
          <p>{popupInfo.hours}</p>
        </div>
      </Popup>
    )
  }

  renderUserMarker = () => {
    if (!this.props.userLocation) {
      return
    }

    return (
      <Marker
        longitude={this.props.userLocation.longitude}
        latitude={this.props.userLocation.latitude}
        offsetTop={-12}
        offsetLeft={12}
      >
        <img width="24" height="24" src={userPin} alt="Bar Pin" />
      </Marker>
    )
  }

  _userClicked = event => {
    console.log('The user clicked at', event.lngLat)
  }

  render() {
    const { viewport } = this.state

    return (
      <div className="map">
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        // mapboxApiAccessToken="pk.eyJ1IjoiZ2Vla2JveWlzb25ub3ciLCJhIjoiY2pyMHljMTMzMHU4ZTN5bHNkNWZzbGdrYiJ9.z13l-C7XioaNx3zQ7igC5Q"
        mapboxApiAccessToken="pk.eyJ1IjoiZ2F2aW5zdGFyayIsImEiOiIxZjVmODFhYWQ2NjIyZGY1MTQ5MzM3ZTE2MWNkMDkxMiJ9.HG1IbUfea4FfcJ0WrY7Pqg"
        onViewportChange={this._updateViewport}
        onClick={this._userClicked}
      >
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>

        {this.renderPopup()}

        {this.renderUserMarker()}

        {this.props.bars.map(bar => {
          return (
            <Marker
              key={bar.id}
              longitude={bar.longitude}
              latitude={bar.latitude}
              offsetTop={-12}
              offsetLeft={12}
            >
              <img
                onClick={() => {
                  this.props.onClickMarker(bar)
                  this.setState({ popupInfo: bar })
                }}
                width="24"
                height="24"
                src={userPin}
                alt="User Pin"
              />
            </Marker>
          )
        })}
      </MapGL>
      </div>
    )
  }
}

export default Map

