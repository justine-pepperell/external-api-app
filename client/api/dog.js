import request from 'superagent'

const dogApiUrl = 'https://dog.ceo/api'

export function getRandomDog() {
  return request.get(dogApiUrl + '/breeds/image/random').then((response) => {
    console.log(response.body)
    return response.body.message
  })
}
