import { useState, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [data, setData] = useState(null);

  const handleMapClick = (e) => {
    const latitude = e.latlng.lat.toFixed(6);
    const longitude = e.latlng.lng.toFixed(6);

    setLat(latitude);
    setLon(longitude);

    console.log("Clicked coordinates:", latitude, longitude);
  };

  useEffect(() => {
    const map = L.map("map").setView([0, 0], 2);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "OpenStreetMap contributors",
    }).addTo(map);

    map.on("click", handleMapClick);

    return () => map.remove();
  }, []);

  const handleSearch = () => {
    const fakeData = {
      temperature: "24°C",
      humidity: "65%",
      city: "Lima",
    };

    setData(fakeData);
  };

  return (
    <div className="container">
      <h2>Search by Coordinates</h2>

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

        <button onClick={handleSearch}> Search </button>
      </div>

      {data && (
        <table className="result-table">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.city}</td>
              <td>{data.temperature}</td>
              <td>{data.humidity}</td>
            </tr>
          </tbody>
        </table>
      )}

      <div id="map" className="map-container"></div>
    </div>
  );
}

export default App;
