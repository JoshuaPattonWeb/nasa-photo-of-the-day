import React, { useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { useState } from 'react';
import {BASE_URL, API_KEY} from './index.js';


function App() {
  const [spaceData, setSpaceData] = useState(null)
  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setSpaceData(res.data)
      console.log(setSpaceData)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])
  
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        {/* <Image spaceData ? setSpaceData(spaceData.hdurl) : null } */}
      </p>
    </div>
  );
}

export default App;
