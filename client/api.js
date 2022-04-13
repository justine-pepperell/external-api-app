import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'
const ghibliURL = 'https://ghibliapi.herokuapp.com'


// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***


export function getGhibli () {
  return request 
  .get(ghibliURL + '/species')
  .then(resp => {
    console.log(resp.body)
    return resp.body
  })
}

export function getFilm () {
  return request 
  .get(ghibliURL + '/films')
  .then(resp => {
    console.log(resp.body)
    return resp.body
  })

}
