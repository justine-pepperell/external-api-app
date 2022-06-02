import React, {useState } from 'react'

//import { getWelcome } from '../api'

import { getPhonetics } from '../api'


function App() {
  //const [welcomeStatement, setWelcomeStatement] = useState('')
  const [word, setWord] = useState('');
  const [phoneticSpelling, setPhoneticsSpelling] = useState('')


  return <main>
    <h2>{phoneticSpelling}</h2>
     
      <form onSubmit={(e) => {
        getPhonetics(word).then((res) => {
          setPhoneticsSpelling(res);
        })
        .catch((err) => {
          console.log(err.message)
        })
        e.preventDefault();
      }}>
        <input type="text" name="word" value={word} onChange={(e) => {
          //console.log(e.target.value)
          setWord(e.target.value); //this updates the state value for 'word' declared in useState(''), also re-renders
        }} placeholder="Enter a word." />
        <input type="submit" value="Submit" />
      </form>
    </main>

}

export default App
