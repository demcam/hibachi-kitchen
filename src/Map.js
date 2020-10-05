import React, { useState } from "react";

import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function MyGoogleMap() {
  const [lat, setLat] = useState(50);
  const [long, setLong] = useState(12);

  function getLat() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        setLat(latitude);
      });
    }
  }

  function getLong() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const longitude = position.coords.longitude;
        setLong(longitude);
      });
    }
  }

  getLat();
  getLong();

  function displayCoords() {
    return { lat: lat, lng: long };
  }

  return (
    <div>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: displayCoords().lat, lng: displayCoords().lng }}
      />
    </div>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(MyGoogleMap));

function Map() {
  return (
    <div>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key={Your Key Here}"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default Map;
