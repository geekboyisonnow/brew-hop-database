import React, { Component } from "react";
import axios from "axios";
import Logo from "./Logo-Circle-4.png";
import Map from './Map'
import "./App.css";
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "/bars.json",
      bars: [],
      other: [],
      selected_bar: {},
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
          url: `/bars.json?latitude=${position.coords.latitude}&longitude=${
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
        <p>{this.state.selectedLocation.name}</p>
        <p>{this.state.selectedLocation.location}</p>
        <p>{this.state.selectedLocation.hours}</p>
        <p>{this.state.selectedLocation.rating}</p>
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
          <p>Local Bars</p>
          <p>Should Be Dynamically</p>
          <p>Listed Here!!!</p>
        </div>
      );
    } else {
      // console.log(this.state.bars)
      return (
        <div>
              <Map onClickMarker={this.onClickMarker} bars={this.state.bars}/>
          <div id="content">
          <div className="bars">
            <div className="list">
              <strong>
                <u>All Bars Near By</u>
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
                return <div key={bar.id}>{bar.stars}</div>;
              })}
            </div>
          </div>
        </div>
        </div>
      );
    }
  }
}

export default Home

// searchFunction() {
//   // Declare variables 
//   var input, filter, div, p, td, i, txtValue;
//   input = document.getElementById("input");
//   div = document.getElementById("search-content");
//   p = div.getElementsByTagName("p");

//   // Loop through all div rows, and hide those who don't match the search query
//   for (i = 0; i < p.length; i++) {
//     td = p[i].getElementsByTagName("td")[0];
//     if (td) {
//       txtValue = td.textContent || td.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         p[i].style.display = "";
//       } else {
//         p[i].style.display = "none";
//       }
//     } 
//   }