import React, { useState } from 'react'

// import { getWelcome } from '../api'
import { getSpacePicture } from '../api'

function App() {
  // const [welcomeStatement, setWelcomeStatement] = useState('')
  const [spaceImage, setSpaceImage] = useState(null)

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
  const findSpace = () => {
    getSpacePicture()
      .then((obj) => {
        console.log(obj)
        setSpaceImage(obj)
      })
      .catch((err) => {
        return err.message
      })
  }

  return (
    <div>
      <h1>hello</h1>
      <button onClick={findSpace}>Get a space image</button>
      {spaceImage && <img src={spaceImage.url} />}
    </div>
  )
}

export default App
