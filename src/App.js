import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components"

import axios from 'axios'
import { API_KEY } from './secrets'

import Photo from './Photo'

const StyledH1 = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: blue;
`;

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
      <StyledH1>NASA photo of the day</StyledH1>
      {
        <Photo nasaPhoto={nasaPhoto} />
      }
    </div>
  );
}

export default App;
