import React from "react";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function App() {
  const [BackendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/images")
    .then(response => response.json())
    .then(data => {
      setBackendData(data);
    });
  }, []);

  return (
    <div class="gallery">
    {BackendData.map((item) => (
        <div class="gallery-item">
          <img src={item["link"]} alt={item["alt"]} width={item["width"]} height={item["height"]} class="figure-img img-fluid"/>
          <figcaption class="figure-caption">{item["alt"]}</figcaption>
        </div>
    ))}
    </div>
  );
}

export default App;
