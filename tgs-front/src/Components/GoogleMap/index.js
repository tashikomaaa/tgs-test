import React from 'react'
import GoogleMapReact from 'google-map-react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Geocode from "react-geocode";
import {Icon} from '@iconify/react';
import googlemapsIcon from '@iconify-icons/simple-icons/googlemaps';



/*  
// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBzXJYKmmUGbbhLPXodGOOCIhWcbTDb98Y");
 
// set response language. Defaults to english.
Geocode.setLanguage("en");
 
// set response region. Its optional.
// A Geocoding request with region=es (Spain) will return the Spanish city.
Geocode.setRegion("es");
 
// Enable or disable logs. Its optional.
Geocode.enableDebug();
 
// Get address from latitude & longitude.
Geocode.fromLatLng("48.8583701", "2.2922926").then(
  response => {
    const address = response.results[0].formatted_address;
    console.log(address);
  },
  error => {
    console.error(error);
  }
); */

const LocationPin = ({text}) => (
    <div className="pin">
    <Icon icon={googlemapsIcon} />
    <p className="pin-text">{text}</p>
  </div>
)
function GoogleMapComponent() {

  const [center, setCenter] = React.useState({lat: 48.85337622108853, lng: 2.338379690527348})
    navigator?.geolocation.getCurrentPosition(({coords: {latitude: lat, longitude: lng}}) => {
        setCenter({lat: lat, lng: lng})  
    })


  const onDragMarker = (latLng) => {
      console.log('lat', latLng.lat(),'lng', latLng.lng())
    setCenter({lat: latLng.lat(), lng: latLng.lng()}) 
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCg6_dWimcBcRk9ciysiN0W_I99FJnRAdI' }}
          defaultCenter={center}
          defaultZoom={20}  
        >
          <LocationPin
            lat={center.lat}
            lng={center.lng}
            text={'Départ'}
            onDragEnd={(e) => onDragMarker(e.latLng)}
            >
        </LocationPin>
        </GoogleMapReact>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default React.memo(GoogleMapComponent)