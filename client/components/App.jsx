import React, { useState, useEffect } from 'react'

import { getDog, getWelcome, experiment } from '../api'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [dog, setDog] = useState('')
  const [weridExperiment, setWeirdExperiment] = useState('')

  const clickHandler = () => {
    getDog()
    .then(str => {
      setDog(str)
    }).catch((err) => {
      console.error(err.message)
    })
  }
 
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

  useEffect(()=> {
      experiment()
        .then((resp) => {
          setWeirdExperiment(resp)
          console.log(resp)
        })
        .catch((err) => {
          console.error(err.message)
        })
    },[]
  )

  return (
    
    <>
      <h1>{welcomeStatement}</h1>
      <h2>{weridExperiment.name}</h2>
      <button onClick={clickHandler}>Click!</button>
      {dog && <img src={dog}/>}
    </>
    )
}

export default App
