import request from 'superagent'

//const serverURL = 'http://localhost:3000/api/v1' //example 

//external API
const  freeOpenDictionaryURL ='https://api.dictionaryapi.dev/api/v2/entries/en/hello'
                              
// *** EXAMPLE ***
//export function getWelcome() {
  //return request.get(`${serverURL}/welcome`).then((response) => response.body)
//}
// ***   ***   ***

// *** free open dictionary url ***********///

export function getPhonetics() {
  return request
  .get({freeOpenDictionaryURL})
  .then(response => response.body)
}

