import React, { useState, useEffect } from 'react'

import { getWelcome } from '../api'

import { getAllMemes } from '../api/memes'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [randomMeme, setRandomMeme] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  const generateRandomMeme = () => {
    getAllMemes()
      .then(memeArr => {
        const randIndex = Math.floor((Math.random()*memeArr.length))
        // console.log(randIndex)
        console.log(memeArr[randIndex])
        setRandomMeme(memeArr[randIndex].url)
      })
      .catch((err) => {
        console.error(err.message)
      })
  
  }

  return (
  <> 
  <h1>{welcomeStatement}</h1>
    <h2>Would you like to see a random meme?</h2>
      <button onClick={generateRandomMeme}>Spin up a meme!</button><br></br>
      
      <img src={randomMeme}></img>
  </>
  )
}

export default App
