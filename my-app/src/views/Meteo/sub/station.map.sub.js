import React, {useEffect} from 'react';
import SubTpl from "../../../components/_template/sub.tpl";
import BlockCmn from "../../../components/_commons/block.cmn";
import {
    MapContainer, Marker, Popup,
    TileLayer,
    useMap,
} from 'react-leaflet'

function StationMapSub({stations = []}) {

    useEffect(() => {
        console.log(stations)
    }, [])

    let position = [51.505, -0.09]
    return (
        <SubTpl titreProps={{titre: "La cartographie des stations", className: "py-5"}}>
            <BlockCmn className="vh-100 m-0 pb-3">
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
            </BlockCmn>

        </SubTpl>
    );
}

export default StationMapSub;