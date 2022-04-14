import React, { useState, useEffect } from 'react'

import { getCatFact } from '../api'
import {getFinancePrice, getFinanceProfile} from '../api'
import Button from '@mui/material/Button';


function App() {

  const [catFact, setCatFact] = useState(null)
  const [financePrice, setFinancePrice] = useState(null)
  const [financeProfile, setFinanceProfile] = useState(null)

  const findCatFact = () => {
    getCatFact().then(str => {
      setCatFact(str);
    })
  }

  const findFinancePrice = () => {
    getFinancePrice('GOOGL').then(str => { //todo make a random stock or be able to choose
      console.log(str);
      setFinancePrice(str)
    })
  }
  const findFinanceProfile = () => {
    getFinanceProfile('GOOGL').then(str => { //todo make it a random stock or be able to choose
      console.log(str);
      setFinanceProfile(str);
      
    })
  }

  const getAllFinance = () => {
    getFinancePrice('GOOGL').then(str => {
      console.log(str);
      setFinancePrice(str)
    })
    getFinanceProfile('GOOGL').then(str => {
      console.log(str);
      setFinanceProfile(str);
    })
  }
    

  return (
  <div className="main-container">
    <div className="finance-cats">
    </div>
    <div className="cat-fact-container">
      <h1>Welcome to random cat facts!</h1>
      <h2>Did you subscribe to random cat facts? No? heres some anyway.</h2>
      <div className="cat-facts-container">
      </div>
      <Button sx={{margin: '10px'}}variant="contained" onClick={findCatFact}>Get a cat fact</Button>
      <Button variant="contained" onClick={getAllFinance}>Get a stock</Button>
      <div className="cat-fact-box">
        {catFact &&<h3>{catFact.fact}</h3>}
      </div>
      {catFact &&<p>Quote length: {catFact.length}</p>}
      {financePrice && financeProfile && <div className="cat-fact-box">
      <h3>Finance cats:</h3>
     <ul>
        <li>NAME: {financeProfile.name}</li>
        <li>COUNTRY: {financeProfile.country}</li>
        <li>CURRENCY: {financeProfile.currency}</li>
        <li>{financeProfile.exchange}</li>
        <li>IPO DATE: {financeProfile.ipo}</li>
        <li>PRICE :{financePrice.c}</li>
      </ul>
    </div> }
      <img src="https://www.thepetlogic.com/wp-content/uploads/2021/05/Silly-Cat-Names.jpg"></img>
 
   </div>
   <div className="third-section">
     {/* Something else */}
   </div>
  </div>
  )
}

export default App
