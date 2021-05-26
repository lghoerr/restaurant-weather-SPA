import React, { useRef, useEffect, useContext } from "react";
import { CoordsContext } from "../../contexts/coordsContext";
import mapboxgl from "mapbox-gl";

require("dotenv").config();

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function App() {
  const { coords, setCoords } = useContext(CoordsContext);
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [coords[1], coords[0]],
      zoom: 14,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
