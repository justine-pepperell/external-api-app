import request from 'superagent'

const chuckNorrisURL = 'https://api.chucknorris.io/jokes/random'

export function getJokes() {
  return request.get(chuckNorrisURL).then((response) => {
    console.log(response.body)
    return response.body.value
  })
}
