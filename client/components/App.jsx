import React, { useState, useEffect } from 'react'

import { getWelcome , getRandomDriver, getRandomCourse } from '../api'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [getDriver, setGetDriver] = useState(null)
  const [getCourse, setGetCourse] = useState(null)

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

  const getADriver = () => {
    getRandomDriver()
      .then(arr => {
        const singleDriverObj = arr[Math.floor(Math.random() * arr.length)]
        console.log(singleDriverObj)
        setGetDriver(singleDriverObj)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  const getAKart = () => {
    getRandomCourse()
      .then(arr => {
        const singleCourseObj = arr[Math.floor(Math.random() * arr.length)]
        console.log(singleCourseObj)
         setGetCourse(singleCourseObj)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }



  return (
  <div className='main-container'>
    <h1>{welcomeStatement}</h1>
    <div className='driver-container'>
      <button onClick={getADriver}>Get a random Driver!</button>
      <h3>The driver you have got is: {getDriver?.name}</h3>
      <h4>They have the special skill: {getDriver?.special_skill}</h4>
      <h4>They are this rare: {getDriver?.rarity}</h4>
    </div>
    <div className='course-container'>
    <button onClick={getAKart}>Get a random Course!</button>
    <h3>You will be driving on: {getCourse?.name}</h3>
   <h4>The best drivers on this course are: <ul>{getCourse?.level_one_top_shelf_drivers.map( driver => <li key={driver.id}>{driver.name}</li>)}</ul></h4> 
    </div>
  </div>
    )
}

export default App
