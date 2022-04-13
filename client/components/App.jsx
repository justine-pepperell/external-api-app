/* eslint-disable promise/catch-or-return */
import React, { useState, useEffect } from 'react'

import { searchNbaStat } from '../api/nba'

function App() {
  const [nbaStat, setNbaStat] = useState('')
  const [formData, setFormData] = useState({
    name: ''
  })

  const displayNbaStat = (e) => {
    e.preventDefault()
    searchNbaStat(formData.name).then(obj => {
      setNbaStat(obj.map(player => <li key={player.id}>{player.first_name} {player.last_name} - {player.team.city} {player.team.name}</li>))
      })
    }
  
    const changeHandler = (e) => {
      const key = e.target.name
        const value = e.target.value

        const newState = {
            ...formData,
            [key]: value
        }
        setFormData(newState)
    }

  return (
    <>
      <form onSubmit={displayNbaStat}>
        <label htmlFor='name'>Name: </label>
        <input id='name' name='name' value={formData.name} onChange={changeHandler} type='text'/>
        <button>Search</button>
      </form>

      <ul>
        {nbaStat}
      </ul>
    </>
  )
}

export default App
