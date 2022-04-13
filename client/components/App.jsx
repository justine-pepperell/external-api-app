import React, { useState, useEffect } from 'react'

import { getPic } from '../api'

function App() {
  const [pic, setPic] = useState('')

  useEffect(() => {
    getPic()
      .then((res) => {
        setPic(res)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return (
    <>
      <h1>API stuff</h1>
      <img src={pic}/>
    </>

  )
}

export default App
