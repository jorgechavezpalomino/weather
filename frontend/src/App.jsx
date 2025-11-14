import { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [data, setData] = useState({
    temperature: "24°C",
    humidity: "65%",
    city: "Lima",
  });

  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const handleMapClick = (e) => {
    const latitude = e.latlng.lat.toFixed(6);
    const longitude = e.latlng.lng.toFixed(6);

    setLat(latitude);
    setLon(longitude);

    if (markerRef.current) {
      markerRef.current.setLatLng([latitude, longitude]);
    } else {
      markerRef.current = L.marker([latitude, longitude]).addTo(mapRef.current);
    }

    const fakeData = {
      temperature: "24°C",
      humidity: "65%",
      city: "Lima",
    };

    setData(fakeData);
  };

  useEffect(() => {
    mapRef.current = L.map("map").setView([0, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
    }).addTo(mapRef.current);

    mapRef.current.on("click", handleMapClick);

    return () => {
      mapRef.current.off();
      mapRef.current.remove();
    };
  }, []);

  return (
    <div className="container">
      <div id="map" className="map-container"></div>

      <div className="sidebar">
        <h2>Weather World</h2>

        <div className="search-row">
          <input
            placeholder="Latitude"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />

          <input
            placeholder="Longitude"
            value={lon}
            onChange={(e) => setLon(e.target.value)}
          />
        </div>

        {data && (
          <div className="result-card">
            <p>
              <strong>City:</strong> {data.city}
            </p>
            <p>
              <strong>Temp:</strong> {data.temperature}
            </p>
            <p>
              <strong>Hmd:</strong> {data.humidity}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
