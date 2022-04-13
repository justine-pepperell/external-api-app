import React, { useState, useEffect } from 'react'

import { getWelcome } from '../api'
// import { getRandomDog } from '../api/dog'
import { getCharacter } from '../api/character'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  // const [dogImg, setDogImg] = useState(null)
  const [characterImg, setCharacterImg] = useState(null)

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

  // const findDog = () => {
  //   getRandomDog()
  //     .then(str => {
  //       setDogImg(str)
  //     })
  //     .catch
  // }

  const findCharacter = () => {
    getCharacter()
      .then(obj => {
        setCharacterImg(obj)
      })
      .catch
  }

  return (
  <>
    <h1>{welcomeStatement}</h1>
    {/* <button onClick={findDog}>Get doggo</button>
    <img src={dogImg} /> */}
    <button onClick={findCharacter}>Bobs burger characters</button>
    <img src={characterImg?.image} />
    <h4><a href={characterImg?.wikiUrl}>{characterImg?.name}</a></h4>
  </>
  )
}

export default App
