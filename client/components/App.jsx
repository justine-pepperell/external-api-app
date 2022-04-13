import React, { useState, useEffect } from 'react'

import { getWelcome } from '../api'
import { getRandomDog } from '../api/dog'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [dogImg, setDogImg] = useState(null)

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

  const findDog = () => {
    getRandomDog()
      .then(str => {
        setDogImg(str)
      })
      .catch
  }

  return (
  <>
    <h1>{welcomeStatement}</h1>
    <button onClick={findDog}>Get doggo</button>
    <img src={dogImg} />
  </>
  )
}

export default App
