import React, { useState, useEffect } from 'react'

import { getWelcome } from '../api'

import { getAllMemes } from '../api/memes'

import { searchEventsWellington } from '../api/ticketmaster'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [randomMeme, setRandomMeme] = useState('')
  const [wellyEvents, setWellyEvents] = useState(null)

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

  // useEffect(() => {

  // })
  const generateRandomMeme = () => {
    getAllMemes()
      .then(memeArr => {
        const randIndex = Math.floor((Math.random()*memeArr.length))
        // console.log(randIndex)
        console.log(memeArr[randIndex])
        setRandomMeme(memeArr[randIndex].url)
      })
      .catch((err) => {
        console.error(err.message)
      })
  
  }

  const generateWellyEvents = () => {
    searchEventsWellington()
      .then((eventsArr) => {
        setWellyEvents(eventsArr)

        // console.log(wellyEvents)
        // console.log(eventsArr)
      })
      .catch((err) => {
        console.error(err.message)
      })
  
  }



  return (
  <> 
  <h1>{welcomeStatement}</h1>
    <h2>Would you like to see a random meme?</h2>
      <button onClick={generateRandomMeme}>Spin up a meme!</button><br></br><br></br>
      
      <img src={randomMeme}></img>

    <h2>Lets see whats on in Welly!</h2>
      <button onClick={generateWellyEvents}>Whats on in Welly?</button><br></br><br></br>
      <div className="eventInfo">
        {/* {wellyEvents && <h1>{wellyEvents[0].name}</h1>} */}
        {wellyEvents && <ul>
          {wellyEvents.map((event, i) => (
          <li key={i}><h3>{event.name}</h3>
          <img src={event.imgUrl}></img></li>)
          )}
        </ul>}

      </div>

       
  </>
  )
}

export default App
