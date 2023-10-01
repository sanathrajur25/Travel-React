import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './City1.css';

class City1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      selectedHotel: null,
      showingInfoWindow: false,
    };
  }

  componentDidMount() {
    this.searchHotels();
  }

  searchHotels = () => {
    const { google } = this.props;
    const { lat, lng } = { lat: 32.239632, lng: 77.188713 }; // Replace with your city's coordinates

    const service = new google.maps.places.PlacesService(document.createElement('div'));
    const request = {
      location: new google.maps.LatLng(lat, lng),
      radius: '5000', // Radius in meters (5km)
      type: ['lodging'] // Search for lodging/hotels
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ hotels: results });
      } else {
        console.log('Error:', status);
      }
    });
  };

  onMarkerClick = (hotel) => {
    this.setState({
      selectedHotel: hotel,
      showingInfoWindow: true
    });
  };

  render() {
    const { google } = this.props;
    const { hotels, selectedHotel, showingInfoWindow } = this.state;

    return (
      <div className="map-container">
        <h2>Hotel Details</h2>
        <Map
          google={google}
          style={{ width: "70%", height: "70%",left:"15%",right:"15%",top:"15%",bottom:"15%" }}
          zoom={10}
          initialCenter={{
            lat: 32.239632,
            lng: 77.188713
          }}
        >
          {/* Render markers for each nearby hotel */}
          {hotels.map(hotel => (
            <Marker
              key={hotel.place_id}
              position={{ lat: hotel.geometry.location.lat(), lng: hotel.geometry.location.lng() }}
              title={hotel.name}
              icon={{
                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // Customize the marker icon
                scaledSize: new google.maps.Size(32, 32) // Adjust the icon size as needed
              }}
              onClick={() => this.onMarkerClick(hotel)}
            />
          ))}

          {/* Render InfoWindow for the selected hotel */}
          {selectedHotel && (
            <InfoWindow
              position={{ lat: selectedHotel.geometry.location.lat(), lng: selectedHotel.geometry.location.lng() }}
              visible={showingInfoWindow}
              onClose={() => this.setState({ showingInfoWindow: false })}
            >
              <div>
                <h3>{selectedHotel.name}</h3>
                <p>{selectedHotel.vicinity}</p>
                {/* Display hotel photos if available */}
                {selectedHotel.photos && selectedHotel.photos.length > 0 && (
                  <div className="hotel-photos">
                    {selectedHotel.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo.getUrl({ maxWidth: 200, maxHeight: 200 })}
                        alt={`Hotel Photo ${index}`}
                      />
                    ))}
                  </div>
                )}
                {/* Add other hotel details here */}
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCTZX30jw7TcHXeaHwkkegRxGZ3eIsB1-E" // Replace with your actual API key
})(City1);
