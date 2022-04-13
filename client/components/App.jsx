import React, { useState } from 'react'

import { getMaoriProverb } from '../api'


function App() {
  const [maoriProverb, setMaoriProverb] = useState(null)

  const findProverb = () => {
    // eslint-disable-next-line promise/catch-or-return
    getMaoriProverb()
      .then(obj => {
        setMaoriProverb(obj)
      })
    }

  return (
    <>
      <h1>Proverb Test</h1>
      <button onClick={findProverb}>Get Proverb</button>
      <p>{maoriProverb?.source}</p>
      <p>{maoriProverb?.translation}</p>

    </>
  )
}


export default App