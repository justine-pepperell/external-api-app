import request from 'superagent' ///library for making api requests - only need the url and params 

//const serverURL = 'http://localhost:3000/api/v1' //example

//external API
const freeOpenDictionaryURL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

// *** EXAMPLE ***
//export function getWelcome() {
//return request.get(`${serverURL}/welcome`).then((response) => response.body)
//}
// ***   ***   ***

// *** free open dictionary url ***********///

export function getPhonetics(word = '') {
  const requestUrl = `${freeOpenDictionaryURL}/${word}` ///makes a concatenation of url and specific word being search in the api's db
  return request /// this is an async function (request is the promise)
    .get(requestUrl) 
    .then((response) => {
      if (!!response.body[0].phonetic) {
        return response.body[0].phonetic; //Promise <string> (datatype)
      }
      //fallback: sometimes phonetic spelling does not exist as property but can be found in phonetics array. Quirky API!

      if (!!response.body[0].phonetics && response.body[0].phonetics.length > 1 && !!response.body[0].phonetics[1].text) {
        return response.body[0].phonetics[1].text;
      } 
      return 'No result found.';  //should all fail - this will display on page!
    })
    .catch((err) => {
      alert(err)
    })
}
