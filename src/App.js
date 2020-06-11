import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios'
import { API_KEY } from './secrets'

import Photo from './Photo'
import MarsImages from './MarsImages'
import HeaderStyling from './HeaderStyling'

function App() {
  const [nasaPhoto, setNasaPhoto] = useState('')

  const [nasaPhotoCollection, setNasaPhotoCollection] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        //console.log(res.data)
        setNasaPhoto(res.data)
      })
      .catch(err => {
        debugger
      })
  }, []) 

  useEffect(() => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`)
      .then(res => {
        //console.log(res.data.photos)
        setNasaPhotoCollection(res.data.photos)
      })
      .catch(err => {
        debugger
      })
  }, []) 
    
  return (
    <div className="App">
      <div>
        <HeaderStyling textColorBlue>NASA photo of the day</HeaderStyling>
        {
          <Photo nasaPhoto={nasaPhoto} />
        }
      </div>
      <div className="container">
        <HeaderStyling subTextSize>Mars Image Collection</HeaderStyling>
        <MarsImages nasaPhotoCollection={nasaPhotoCollection} />
      </div>
    </div>
  );
}

export default App;
