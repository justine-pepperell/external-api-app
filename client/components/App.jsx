import React, { useState, useEffect } from 'react'

import { getWelcome, getNumber } from '../api'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')
  const [number, setNumber] = useState(null)
  const [chineseNum, setChineseNum] = useState(null)

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  const findNumber = () => {
    getNumber()
      .then((res) => {
        setNumber(res)

        //1st Method - render Chinese numerals
        // let newNum = number.numerals.chinese.value
        // let span = document.createElement('span')
        // span.innerHTML = newNum
        // newNum = span.innerText

        // setChineseNum(newNum)

        // 2nd Method:
        const html = number.numerals.babylonian.value
        const decodeHtmlEntities = (html) => {
          return html.replace(/&#(\d+);/g, (_, $1) =>
            String.fromCharCode(Number($1))
          )
        }
        setChineseNum(decodeHtmlEntities(html))
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <div className="main-container">
      <h1>{welcomeStatement}</h1>

      <div className="number-container">
        <h2>What is the number of the day ? </h2>
        <button onClick={findNumber}>Click Here</button>
        {number && (
          <>
            <p>{number.number}</p>
            <p>Interested to find out the Chinese version numerals?</p>
            <button onClick={findNumber}>Click again</button>

            {chineseNum && <p>{chineseNum}</p>}
            {/* <p>{chineseNum?.value}</p> ----alternative*/}
          </>
        )}
      </div>
    </div>
  )
}

export default App
