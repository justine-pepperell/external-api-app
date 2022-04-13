import request from 'superagent'

const bobsBurgUrl = 'https://bobsburgers-api.herokuapp.com/characters/'

export function getCharacter() {
  const randNum = Math.floor(Math.random() * 503)
  return request.get(bobsBurgUrl).then((response) => {
    console.log(response.body[randNum])
    return response.body[randNum]
  })
}
