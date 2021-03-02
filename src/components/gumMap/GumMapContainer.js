import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { darkTheme, lightTheme} from './gump.styles'
import forestRoute from '../../constants/data';
import Sidebar from '../sidebar';
import Polyline from '../polyline/Polyline';
import Marker from '../marker';

import './styles.css';

const myRef = React.createRef();

const getCenter = (markers, map, maps) => {
  const center = {};
  const bounds = new window.google.maps.LatLngBounds();
  let i;
  const polygonCoords = markers.map(
    ({ lat, lng }) => new window.google.maps.LatLng(lat, lng),
  );

  for (i = 0; i < polygonCoords.length; i++) {
    bounds.extend(polygonCoords[i]);
  }
  const { lat, lng } = bounds.getCenter();
  center.lat = lat();
  center.lng = lng();
  return center;
};


class GumMap extends Component {
  constructor(props){
    super(props)
    this.state = {
      mapsLoaded: false,
      map: null,
      maps: null,
      selectedLocation: 1,
    }
  }
  handleApiLoaded = ({ map, maps }) => {
    this.setState({
      ...this.state,
      isMapsLoaded: true,
      map: map,
      maps: maps
    })
  };

  onSelectLocation = (value) => {
    this.setState({selectedLocation: value });
  };

  selectCenter = () => {
    const { selectedLocation } = this.state;
    const { pendingRoute, traveledRoute, actualLocation } = forestRoute;
    const locations = [...traveledRoute, actualLocation, ...pendingRoute ];

    const newLocations = locations.find((place) => place.id === selectedLocation);
    const center = selectedLocation ? newLocations : getCenter(locations);
    return center;
  };

  render() {
    const { isMapsLoaded, map, maps, selectedLocation } = this.state;
    const { lightMode } = this.props;
    const { pendingRoute, traveledRoute, actualLocation } = forestRoute;

    const locations = [...traveledRoute, actualLocation, ...pendingRoute ];
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <Sidebar
          locations={locations}
          onSelectLocation={this.onSelectLocation}
          selectedLocation={selectedLocation}
        />
        <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyBtKvtQheyFUIKjFUhONX1MjZr7gd0oEAg'}}
          center={this.selectCenter()}
          defaultZoom={5}
          options={{styles: lightMode ? lightTheme : darkTheme}}
          ref={myRef}
          onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded({ map, maps })}
        >
          {locations.map(({ lat , lng, img, id, name, current, indicator}) => (
            <Marker
              lat={lat}
              lng={lng}
              id={id}
              img={img}
              name={name}
              current={current}
              indicator={indicator}
              onSelectLocation={this.onSelectLocation}
              selectedLocation={selectedLocation}
              lightMode={lightMode}
            />
          ))}
           {locations.map(({ lat , lng, img, id, name, current, indicator}) => (
            <Marker
              lat={lat}
              lng={lng}
              id={id}
              img={img}
              name={name}
              current={current}
              indicator={indicator}
              onSelectLocation={this.onSelectLocation}
              selectedLocation={selectedLocation}
              lightMode={lightMode}
            />
          ))}

          {isMapsLoaded && locations ? (
            <Polyline
            markers={forestRoute}
            map={map}
            maps={maps}
          />
          ) : null }

        </GoogleMapReact>
    </div>
    )
  }
};

export default GumMap;
