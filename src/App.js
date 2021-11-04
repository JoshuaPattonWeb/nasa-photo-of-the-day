import React, { useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { useState } from 'react';
import SpacePhoto from "./Components/spacePhoto";



function App() {
  const [spaceData, setSpaceData] = useState([])
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=fKwpeB90uou3UlUdfzg7pOEOcupaBUnGKUTL2sWx&date=2021-11-03`)
    .then(res => {
      setSpaceData(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])
  console.log(spaceData)
  return (
    <div className="App">
      

      <SpacePhoto data = {spaceData} />
    </div>
  );
}

export default App;
