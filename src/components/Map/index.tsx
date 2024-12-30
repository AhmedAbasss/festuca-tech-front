import React, { FC, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

interface MapComponentProps {
    // Define any props that you plan to pass to MapComponent
}

const MapComponent: FC<MapComponentProps> = ({ }) => {
    const customMarker = new L.Icon({
        iconUrl: '/assets/images/location-pin.svg',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });

    const mapConfig = {
        zoom: 10,
        lat: 33.3113141, // Replace with your latitude
        lng: 44.4284016 // Replace with your longitude
    };

    // Component to track user's location
    const LocationMarker = () => {
        const [position, setPosition] = useState<L.LatLng | null>(new L.LatLng(mapConfig.lat, mapConfig.lng));

        useMapEvents({
            click(e) {
                setPosition(e.latlng); // Update position when map is clicked
            },
            locationfound(e) {
                setPosition(e.latlng); // Optionally set when location is found
            }
        });

        return position === null ? null : (
            <Marker
                position={position}
                icon={customMarker}
                eventHandlers={{
                    click: () => {
                        console.log("Position:", position);
                        // Open Google Maps with the current location
                        window.open(`https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}`);
                    },
                }}
            />
        );
    };

    return (
        <MapContainer
            center={[mapConfig.lat, mapConfig.lng]}
            zoom={mapConfig.zoom}
            style={{ height: '230px', maxHeight: '230px', width: '100%', }}
        >
            <TileLayer
                url="http://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
            />
            <LocationMarker />
        </MapContainer>
    );
};

export default MapComponent;
