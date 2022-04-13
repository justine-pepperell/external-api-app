import React, { useState } from 'react'


import { getJokes } from '../api.js'

function App() {
 
const [chuckJoke, setChuckJoke] = useState(null)

const getRandomJoke = () => {
  getJokes()
  .then (str => {
    setChuckJoke(str)
  })
  .catch((err) => {
    console.log(err.message)
  })
}


  return (
    <>
  
  <h1>Chuck Norris Jokes</h1>
  <button onClick ={getRandomJoke}>Random Jokes </button>
  {chuckJoke && <h2>{chuckJoke}</h2>}



  </>

  )
}

export default App
