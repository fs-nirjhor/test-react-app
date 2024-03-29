import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const OpenStreetMap = ({lat, long, name}) => {
  return (
  	<div>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height:"40vh", width:"60vw", margin: "auto"}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      FSN
    </Popup>
  </Marker>
</MapContainer>
  	</div>
  );
};

export default OpenStreetMap;
