import React, { useState, useEffect } from 'react'

import { getSpacePicture } from '../api/nasa'

import { getWelcome } from '../api'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [spaceObj, setSpaceObj] = useState(null)

  const findSpace = () => {
    getSpacePicture()
      .then(obj => {
        setSpaceObj(obj)
      })
  }






  // useEffect(() => {
  //   getWelcome()
  //     .then((res) => {
  //       setWelcomeStatement(res.statement)
  //       return null
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // })

  return (
    <>
      <h1>NASA space is crazy aye!</h1>
      <button onClick={findSpace}>Get space pic</button>
      {/* {spaceObj && <img src={spaceObj.url} />} */}
      <img src={spaceObj?.url} />
    </>
  )
}

export default App
