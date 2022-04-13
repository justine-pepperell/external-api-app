import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***

export function getDog() {
  return request
    .get('https://dog.ceo/api/breeds/image/random')
    .then((resp) => resp.body.message)
}

export function experiment() {
  return request
    .get('https://api.wheretheiss.at/v1/satellites')
    .then((resp) => resp.body[0])
}
