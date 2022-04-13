import React, { useState, useEffect } from 'react'

import { getGhibli, getFilm } from '../api'


function App() {
  // const [welcomeStatement, setWelcomeStatement] = useState('')
  const [ghibliSpec, setGhibliSpec] = useState([])
  const [getAFilm, setAFilm] = useState([])

 

  const findGhibliSpec = () => {
    getGhibli()
      .then(ghibliArr => {
        const ghibliObj = ghibliArr[Math.floor(Math.random() *ghibliArr.length)]
        console.log(ghibliObj)
        setGhibliSpec(ghibliObj)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  const findFilm = () => {
    getFilm()
      .then(filmArr => {
        const filmObj = filmArr[Math.floor(Math.random() *filmArr.length)]
        console.log(filmObj)
        setAFilm(filmObj)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
<>
  {/* <h1>{welcomeStatement}</h1> */}
  
<button onClick={findFilm}>Get A Ghibli Film</button>
    <h1>Title: {getAFilm?.title}</h1>
    <h2>Original Title: {getAFilm?.original_title}</h2>
    <h2>Description: {getAFilm?.description}</h2>
    <h2>Director: {getAFilm?.director}</h2>
    <h2>Release Date: {getAFilm?.release_date}</h2>
    <h2>Running Time: {getAFilm?.running_time}</h2>
    <h2>Rating: {getAFilm?.rt_score}</h2>





  <button onClick={findGhibliSpec}>Get Ghibli Species</button>
    <h1>Name: {ghibliSpec?.name}</h1>
    <h2>Classification: {ghibliSpec?.classification}</h2>
    <h2>Eye Colour: {ghibliSpec?.eye_colors}</h2>
    <h2>Hair Colour: {ghibliSpec?.hair_colors}</h2>
    <h2>URL: {ghibliSpec?.url}</h2>
    <h2>People: {ghibliSpec?.people}</h2>
    <h2>Films: {ghibliSpec?.films}</h2>

    
    
  
  
  
</> 
)
}

export default App
