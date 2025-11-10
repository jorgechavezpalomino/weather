import { useState } from "react";
import "./App.css";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [data, setData] = useState(null);

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
          type="text"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />

        <input
          type="text"
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
    </div>
  );
}

export default App;
