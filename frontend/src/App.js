import * as React from "react";
import Map, { Marker } from "react-map-gl";
import RoomIcon from "@mui/icons-material/Room";

function App() {
  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYXRodW1tYSIsImEiOiJjbHM3NW85MXQyMzdoMmlwaXE0ajlyamMyIn0.vdT8Tssgu7ZMmy6zQrtccw"
        initialViewState={{
          longitude: 46,
          latitude: 17,
          zoom: 3.5,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          longitude={48.858093}
          latitude={2.294694}
          anchor="bottom"
        >
          <RoomIcon style={{ fontSize: 4*10 }} />
        </Marker>
      </Map>
      
    </>
  );
}

export default App;
