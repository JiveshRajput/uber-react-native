import React, { useEffect, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { getOrigin, getDestination, setTravelTimeInformation } from '../store/navSlice';

export default function Map({ }) {
    const origin = useSelector(getOrigin);
    const destination = useSelector(getDestination);
    const dispatch = useDispatch();
    const mapRef = useRef(null);

    useEffect(() => {
        if (!origin || !destination) return;

        setTimeout(() => {
            mapRef.current.fitToSuppliedMarkers(["destination", "origin"], { edgePadding: { top: 50, left: 50, right: 50, bottom: 50 } });
        }, 10);
    }, [origin, destination])

    useEffect(() => {
        if (!origin || !destination) return;

        const getTravelTime = async () => {
            const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${destination.location.lat},${destination.location.lng}&origins=${origin.location.lat},${origin.location.lng}&units=imperial&key=${GOOGLE_MAPS_APIKEY}`

            fetch(URL)
                .then((res) => res.json())
                .then((data) => dispatch(setTravelTimeInformation(data.rows[0].elements[0])))
        }

        getTravelTime();

    }, [origin, destination, GOOGLE_MAPS_APIKEY])

    return (
        <>
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={tw`flex-1`}
                mapType="standard"
                initialRegion={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.004,
                }}
                zoomEnabled={true}
                // zoomControlEnabled={true}
            >
                {origin && destination &&
                    <MapViewDirections
                        origin={{ latitude: origin.location.lat, longitude: origin.location.lng }}
                        destination={{ latitude: destination.location.lat, longitude: destination.location.lng }}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeColor='black'
                        strokeWidth={3}
                    />
                }
                {origin?.location && (
                    <Marker
                        coordinate={{ latitude: origin.location.lat, longitude: origin.location.lng }}
                        title='Origin'
                        identifier='origin'
                        description={origin.description}
                    />)}
                {destination?.location && (
                    <Marker
                        coordinate={{ latitude: destination.location.lat, longitude: destination.location.lng }}
                        title='Destination'
                        identifier='destination'
                        pinColor='green'
                        description={destination.description}
                    />)}
            </MapView >
        </>
    );
}
