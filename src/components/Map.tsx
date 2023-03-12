import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import "../App.css"


export default function HomeMap () {
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!
    });
    
    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
  }

function Map() {

    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);


    return <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="map-container">
        <Marker position={center} />
        </GoogleMap>
  }
