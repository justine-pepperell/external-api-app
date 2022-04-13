import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'
const cocktailURL = 'www.thecocktaildb.com/api/json/v1/1/'

export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}

export function getRandomDriver() {
  return request
    .get('https://mario-kart-tour-api.herokuapp.com/api/v1/drivers')
    .then((resp) => {
      return resp.body
    })
}
