import request from 'superagent'

const quotesURL = 'https://type.fit/api/quotes'
const nasaImage = 'https://api.nasa.gov/planetary/apod?api_key=jWdt8wsCHj3Kx4yIerx1KK0eFBJ6gb2uCoTgfvu4'
const unsplash = 'https://api.unsplash.com//photos/random?client_id=f_2pDTpJwNPTtaprJWkLTR9jcOWUO1Aff7PgsMlt2-c'


export function getQuotes() {
  return request
  .get(quotesURL)
  .then((response) => response)
}

export function getImage() {
  return request
  .get(unsplash)
  .then((response) => response)
}
