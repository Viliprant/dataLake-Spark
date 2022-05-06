import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

function MapSection({stations= []}) {
    let position = [50.7333333, 1.6]

    return (
        <MapContainer center={position} zoom={1} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {stations.map((station,i) => (
                <Marker position={[station.LATITUDE, station.LONGITUDE]} key={i}>
                    <Popup>
                        <p>Station de {station.NAME}</p>
                    </Popup>
                </Marker>

            ))}

        </MapContainer>
    );
}

export default MapSection;