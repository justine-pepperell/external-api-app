import React, { useState, useEffect } from 'react'

import { getWelcome , getRandomDriver } from '../api'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [getDriver, setGetDriver] = useState(null)

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

  const getADriver = () => {
    getRandomDriver()
      .then(arr => {
        const singleDriverObj = arr[Math.floor(Math.random() * 120)]
        console.log(singleDriverObj)
        setGetDriver(singleDriverObj)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }


  return (
  <div className='main-container'>
    <h1>{welcomeStatement}</h1>
    <button onClick={getADriver}>Get a random Driver!</button>
    <h3>The driver you have got is: {getDriver?.name}</h3>
    <h4>They have the special skill: {getDriver?.special_skill}</h4>
    <h4>They are this rare: {getDriver?.rarity}</h4>
  </div>
    )
}

export default App
