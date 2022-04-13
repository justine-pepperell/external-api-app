import React, { useState, useEffect } from 'react'

import { getCatFact } from '../api'

function App() {

  const [catFact, setCatFact] = useState(null)

  const findCatFact = () => {
    getCatFact().then(str => {
      setCatFact(str);
    })
  }

  return (
  <div className="main-container">
    <div className="finance-cats">
    <h3>Finance cats:</h3>
    {/* FINANCE API INFO GOES HERE */}
    </div>
    <div className="cat-fact-container">
      <h1>Welcome to random cat facts!</h1>
      <h2>Did you subscribe to random cat facts? No? heres some anyway.</h2>
      <div className="cat-facts-container">

      </div>
      <button onClick={findCatFact}>Get a cat fact</button>
      <div className="cat-fact-box">
        {catFact &&<h3>{catFact.fact}</h3>}
      </div>
      {catFact &&<p>Quote length: {catFact.length}</p>}
      <img src="https://www.thepetlogic.com/wp-content/uploads/2021/05/Silly-Cat-Names.jpg"></img>
   </div>
   <div className="third-section">
     {/* Something else */}
   </div>
  </div>
  )
}

export default App
