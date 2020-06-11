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
const StyledDiv = styled.div`
  display: flex;
`;

function App() {
  const [nasaPhoto, setNasaPhoto] = useState('')

  const [nasaPhotoCollection, setNasaPhotoCollection] = useState([])

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

  useEffect(() => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data.photos)
        setNasaPhotoCollection(res.data.photos)
      })
      .catch(err => {
        debugger
      })
  }, []) 

  const Image = ({ info }) => (
    <div className='marsImages'>
      <img key={info.id} src={info.img_src} alt={info.id} />
    </div>
    )
    
  return (
    <div className="App">
      <div>
        <StyledH1>NASA photo of the day</StyledH1>
        {
          <Photo nasaPhoto={nasaPhoto} />
        }
      </div>
      <div className="Container">
        <StyledH1>Mars Image Collection</StyledH1>
        <div className="MarsPhotos">
          {
            nasaPhotoCollection.map(img => {
              return <Image key={img.id} info={img} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
