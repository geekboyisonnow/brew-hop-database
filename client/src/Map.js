import React, {Component} from 'react'
import {render} from 'react-dom';
import './App.css';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import userPin from './bar-pin.png'
// import locationInfo from './location-info'
// import ControlPanel from './control-panel';
// import CITIES from '../../data/cities.json';

const TOKEN = ''; // Set your mapbox token here

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
        zoom: 13.5,
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
          this.props.onClickMarker(null)
          this.setState({ popupInfo: null })
        }}
      >
        <div>
          <p>{popupInfo.bar_name}</p>
          <p>{popupInfo.address}</p>
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
        offsetTop={-64}
        offsetLeft={-32}
      >
        <img width="64" height="64" src={userPin} />
      </Marker>
    )
  }

  _userClicked = event => {
    console.log('The user clicked at', event.lngLat)
  }

  render() {
    const { viewport } = this.state

    

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZ2Vla2JveWlzb25ub3ciLCJhIjoiY2pyMHljMTMzMHU4ZTN5bHNkNWZzbGdrYiJ9.z13l-C7XioaNx3zQ7igC5Q"
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
              offsetTop={-64}
              offsetLeft={-32}
            >
              <img
                onClick={() => {
                  this.props.onClickMarker(bar)
                  this.setState({ popupInfo: bar })
                }}
                width="64"
                height="64"
                src={userPin}
              />
            </Marker>
          )
        })}
      </MapGL>
    )
  }
}

export default Map

