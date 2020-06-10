import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios'

function App() {
  const [nasaPhoto, setNasaPhoto] = useState('')

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        //console.log(res.data)
        setNasaPhoto(res.data.url)
      })
      .catch(err => {
        debugger
      })
  }, []) 

  return (
    <div className="App">
      <h1>NASA photo of the day</h1>
      <img src={nasaPhoto} alt='Photo of the day' />
    </div>
  );
}

export default App;
