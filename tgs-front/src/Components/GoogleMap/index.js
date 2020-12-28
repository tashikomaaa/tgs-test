import React from 'react'
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';


const mapStyles = {
    width: '67%',
    height: '90%',
  };

class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            markers: [
              ]
            };
            this.onClick = this.onClick.bind(this);
      }

      onClick(t, map, coord) {
        const { latLng } = coord;
        const lat = latLng.lat();
        const lng = latLng.lng();
        if(this.state.markers.length >= 2) {
            return
        }
        this.setState(previousState => {
          return {
            markers: [
              ...previousState.markers,
              {
                title: "",
                name: "",
                position: { lat, lng }
              }
            ]
          };
        });
      }
        render() {
                console.log(this.props)
            return (
              <div>
                <Map
                  google={this.props.google}
                  zoom={16}
                  onClick={this.onClick}
                  style={mapStyles}
                  initialCenter={{
                    lat:  48.910609 ,
                    lng:  2.314187
                  }}
                >
                 {this.state.markers.map((marker, index) => (
            <Marker
              key={index}
              title={marker.title}
              name={marker.name}
              draggable
              position={marker.position}
            />
          ))}
                </Map>
              </div>
            );
          }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBzXJYKmmUGbbhLPXodGOOCIhWcbTDb98Y'
  })(GoogleMap);
  