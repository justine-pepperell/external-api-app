import React, { useState, useEffect } from 'react'

import { getMeme } from '../api'

function App() {
  const [meme, setMeme] = useState('')

  useEffect(() => {
    getMeme()
      .then((res) => {
        setMeme(res)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      <h1>API stuff</h1>
      <img src={meme}/>
    </>

  )
}

export default App
