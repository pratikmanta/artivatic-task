import React, { Component } from "react"
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
import Geocode from 'react-geocode';


const MapWithMarker = withGoogleMap(props => {
    
    // commented out code as i havent done billing process so hardcoded lat and long values//
   return (
    <GoogleMap defaultZoom={7} defaultCenter={{ lat: 27.048, lng: 74.217 }}>
      {props.markers.map((marker, index) => { 
        //Geocode.fromAddress(`${marker.City}`).then(response => {               // returns lat and long of all cities 
        // const { lat, lng } = response.results[0].geometry.location;
            return (
            // <Marker key={index} position={{ lat: lat , lng: lng }}>             // displays marker at these coordinates
            <Marker key={index} position={{ lat: 27.0489, lng: 74.2179 }}/>                
        )}
    )}
    </GoogleMap>    
  )
})

class MapComponent extends Component {
  constructor(props) {
    super(props)
  }

//   componentDidMount(){
//     Geocode.setApiKey(api_key);
//   }
  
  render() {
    return (
        <MapWithMarker
            markers={this.props.data}
            loadingElement={<div style={{ height: `400px` }} />}
            containerElement={<div style={{ height: '450px' }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    )
  }
}

export default MapComponent;