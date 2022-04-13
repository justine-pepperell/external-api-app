import React, { useState, useEffect } from 'react'

//import { getWelcome } from '../api'

import { getPhonetics } from '../api'


function App() {
  //const [welcomeStatement, setWelcomeStatement] = useState('')
  const [PhoneticSpelling, setPhoneticsSpelling] = useState('')

  useEffect(() => {
    getPhonetics()
      .then((res) => {
        console.log(res)
        setPhoneticsSpelling(res)
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  })

  
  // // const findPhonetics = () => {
  //   getPhonetics()
  //   .then(str => {
  //    setPhoneticsSpelling(str)
  //   })
  //   .catch((err) => {
  //    console.error(err.message) 
  //   }) 
  

  return (
  <>

  <h2>{PhoneticSpelling}</h2>
  
  </>
  )
}



export default App
