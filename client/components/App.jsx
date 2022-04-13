/* eslint-disable promise/catch-or-return */
import React, { useState} from 'react'

import { searchNbaName, searchNbaStats } from '../api/nba'

function App() {
  const [nbaStat, setNbaStat] = useState('')
  const [formData, setFormData] = useState({
    name: 'nikola jokic'
  })

  const displayNbaStat = (e) => {
    e.preventDefault()
    searchNbaName(formData.name).then(player => searchNbaStats(player[0].id)).then(obj => {
      setNbaStat(obj.map(data => <li key={data.player_id}>Season: {data.season}<br />FGM%: {data.fgm}</li>))
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
