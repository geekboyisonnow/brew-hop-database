import React, {Component} from 'react'
import './App.css';
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import userPin from './bar-pin.png'
import axios from 'axios'

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

  onSubmitRating = (event) => {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(event.target)

    axios.post('/dive_ratings', formData).then((response) => {
      this.props.getBars()

      this.setState({ popupInfo: null })
    })
  }

  renderDiveRatingForm = (bar_id) => {
    return (
      <>
        <input type="hidden" name="dive_rating[bar_id]" value={bar_id}/>
        <ul>
          <li><input type="checkbox" name="dive_rating[cd_jukebox]"/> CD Jukebox</li>
          <li><input type="checkbox" name="dive_rating[sweet_caroline]"/>Sweet Caroline</li>
          <li><input type="checkbox" name="dive_rating[pickeled]"/>Pickled</li>
          <li><input type="checkbox" name="dive_rating[dollar_bills]"/>Dollar Bills</li>
          <li><input type="checkbox" name="dive_rating[cd_jukebox]"/> CD Jukebox</li>
          <li><input type="checkbox" name="dive_rating[sweet_caroline]"/>Sweet Caroline</li>
          <li><input type="checkbox" name="dive_rating[pickeled]"/>Pickled</li>
          <li><input type="checkbox" name="dive_rating[dollar_bills]"/>Dollar Bills</li>
          <li><input type="checkbox" name="dive_rating[cd_jukebox]"/> CD Jukebox</li>
          <li><input type="checkbox" name="dive_rating[sweet_caroline]"/>Sweet Caroline</li>
          <li><input type="checkbox" name="dive_rating[pickeled]"/>Pickled</li>
          <li><input type="checkbox" name="dive_rating[dollar_bills]"/>Dollar Bills</li>
        </ul>
      </>
    )
  }

  renderBreweryRatingForm = (bar_id) => {
    return (
      <>
        <input type="hidden" name="brewery_rating[bar_id]" value={bar_id}/>
        <ul>
          <li><input type="checkbox" name="brewery_rating[ipa]"/>IPA</li>
          <li><input type="checkbox" name="brewery_rating[apa]"/>APA</li>
          <li><input type="checkbox" name="brewery_rating[ale]"/>Ale</li>
          <li><input type="checkbox" name="brewery_rating[hefe]"/>Hefe</li>
          <li><input type="checkbox" name="brewery_rating[porter]"/>Porter</li>
          <li><input type="checkbox" name="brewery_rating[stout]"/>Stout</li>
          <li><input type="checkbox" name="brewery_rating[pale]"/>Pale</li>
          <li><input type="checkbox" name="brewery_rating[blonde]"/>Blonde</li>
          <li><input type="checkbox" name="brewery_rating[pilsner]"/>Pilsner</li>
          <li><input type="checkbox" name="brewery_rating[growler]"/>Growler</li>
          <li><input type="checkbox" name="brewery_rating[crowler]"/>Crowler</li>
          <li><input type="checkbox" name="brewery_rating[rail]"/>Rail</li>
        </ul>
      </>
    )
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
        <div className="bar-popup">
          <p>{popupInfo.name}</p>
          <p>{popupInfo.location}</p>
          <p>{popupInfo.hours}</p>
          <form onSubmit={this.onSubmitRating}>
            {popupInfo.kind === "dive" ? this.renderDiveRatingForm(popupInfo.id) : this.renderBreweryRatingForm(popupInfo.id) }
            <button type="submit">Save</button>

          </form>
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

