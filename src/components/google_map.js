import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon // google uses "lng" weather api returns "lon"
      }
    });
  }
  
  render() {
    // this.refs.map where React will embed the map above into
    return <div ref="map" />;
  }
}

export default GoogleMap;
