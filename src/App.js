import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios'
import { API_KEY } from './secrets'

import Photo from './Photo'

function App() {
  const [nasaPhoto, setNasaPhoto] = useState('')

  /*const [nasaPhotoCollection, setNasaPhotoCollection] = useState([])*/

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setNasaPhoto(res.data)
      })
      .catch(err => {
        debugger
      })
  }, []) 

  /*useEffect(() => {
    axios.get(`https://images-api.nasa.gov?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setNasaPhotoCollection(res.data)
      })
      .catch(err => {
        debugger
      })
  }, []) */

  return (
    <div className="App">
      <h1>NASA photo of the day</h1>
      {
        <Photo nasaPhoto={nasaPhoto} />
      }
    </div>
  );
}

export default App;
