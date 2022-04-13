import React, { useState, useEffect } from 'react'

import { getCatFact } from '../api'

function App() {

  const [catFact, setCatFact] = useState(null)

  const findCatFact = () => {
    getCatFact().then(str => {
      setCatFact(str.fact);
    })
  }

  return (
  <div>
    <h1>Welcome to random cat facts!</h1>
    <h2>Did you subscribe to random cat facts? No? heres some anyway.</h2>
    <div className="cat-facts-container">

    </div>
    <button onClick={findCatFact}>Get a cat fact</button>
    <div className="cat-fact-box">
      <h3>{catFact}</h3>
    </div>
  </div>
  )
}

export default App
