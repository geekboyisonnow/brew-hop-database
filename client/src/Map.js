import './App.css';
import pic from './map-example.PNG'
import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';


import BarPin from './bar-pin.png';
// import barInfo from './bar-info';
// import ControlPanel from './control-panel';
// import CITIES from '../../data/cities.json';

const TOKEN = ''; // Set your mapbox token here



class Map extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 27.7676,
        longitude: -82.6403,
        zoom: 13.5,
        bearing: 0,
        pitch: 0
      }
    }
  }

  _updateViewport = (viewport) => {
    this.setState({ viewport });
  }

  _renderBarMarker = (bar, index) => {
    return (
      <Marker 
        key={`marker-${index}`}
        longitude={bar.longitude}
        latitude={bar.latitude} >
        <BarPin size={20} onClick={() => this.setState({popupInfo: bar})} />
        <img src={BarPin}/>
      </Marker>
    );
  }

  _renderPopup() {
    const {popupInfo} = this.state;

    return popupInfo && (
      <Popup tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        closeOnClick={false}
        onClose={() => this.setState({popupInfo: null})} >
        {/* <barInfo info={popupInfo} /> */}
      </Popup>
    );
  }

  render() {
    const {viewport} = this.state;

    const navStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '10px'
    }
    
    const BARS = [
      {
        "id":13,"bar_name":"3 Daughters","address":"222 22nd St S, St. Petersburg, FL 33712","rating":[],"hours":"12PM - 3AM","latitude":"27.7689902244898","longitude":"-82.6629721020408","type_of_bar":"Brewery Bar"
      },
      
      {
        "id":15,"bar_name":"Cage Brewing","address":"2001 1st Ave S, St. Petersburg, FL 33712","rating":[1],"hours":"1PM - 3AM","latitude":"27.770292","longitude":"-82.660409","type_of_bar":"Brewery Bar"
      },
      
      {
        "id":16,"bar_name":"Pinellas Ale Works","address":"1962 1st Ave S, St. Petersburg, FL 33712","rating":[],"hours":"10AM - 3AM","latitude":"27.7701286326531","longitude":"-82.6597328979592","type_of_bar":"Brewery Bar"
      },
      
      {
        "id":17,"bar_name":"Flying Boat Brewing Company","address":"1776 11th Ave N, St. Petersburg, FL 33713","rating":[],"hours":"1PM - 3AM","latitude":"27.7828457080974","longitude":"-82.657199693093","type_of_bar":"Brewery Bar"
      }

    ]

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZ2Vla2JveWlzb25ub3ciLCJhIjoiY2pyMHljMTMzMHU4ZTN5bHNkNWZzbGdrYiJ9.z13l-C7XioaNx3zQ7igC5Q"
        onViewportChange={this._updateViewport}
        >

        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} 
          />
        </div>
        {BARS.map(bar => 
        <Marker 
         key={bar.id}
         longitude={bar.longitude}
         latitude={bar.latitude} >
         <img width={32} src={BarPin}/>
        </Marker> 
        )}
      </MapGL>
    )
  }
}

export default Map

