import React, { useState, useEffect } from 'react'
import { getImage, getQuotes } from '../api'


function Background() {
    const [image, setImage] = useState('')
    const [quote, setQuote] = useState({
        text: '',
        author: ''
        })
    
    const randomInt = (arr) => {
        return Math.floor(Math.random() * arr.length)
    }

    const setQuoteState = () => {
        getQuotes()
        .then((res) => {
            const quotesArr = JSON.parse(res.text)
            setQuote({
                text: quotesArr[randomInt(quotesArr)].text,
                author: quotesArr[randomInt(quotesArr)].author
            })
            return null
        })
        .catch((err) => {
            console.error(err.message)
        })
    }

    const setImageState = () => {
    getImage()
        .then((res) => {
            setImage(res.body.urls.regular)
            return null
        })
        .catch((err) => {
            console.error(err.message)
        })
    }

    useEffect( () => {
        setQuoteState()
        setImageState()
    },[])

    const refresh = () => {
        setQuoteState()
        setImageState()
    }

  return (
      <>
      <div className='background'>
        <img src={image}/>
      </div>
      <div className='quote'>
        <h1>{quote.text}</h1>
        <h3>{quote.author ? quote.author : 'Unknown'}</h3>
      </div>
      <div className='button'>
        <button onClick={() => refresh()}>Inspire me!</button>
      </div>
      </>
  )
}

export default Background
