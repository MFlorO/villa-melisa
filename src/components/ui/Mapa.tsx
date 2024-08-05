"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from 'leaflet';

// Configuración del ícono predeterminado para los marcadores
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Mapa = () => {

  // Coordenadas de la ubicación
  const position:LatLngTuple = [-31.474501,-64.525025];

  return (
    <MapContainer center={position} zoom={13} style={{ display:'flex', height: '400px', width: '70%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={defaultIcon}>
        <Popup>
          Cabañas Villa Melisa. <br /> Playa de Oro III.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;

