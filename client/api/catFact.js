import request from 'superagent'

const catUrl = 'https://cat-fact.herokuapp.com'

export function getCatFact() {
  return request
    .get(catUrl + '/facts/random?animal_type=cat&amount=1')
    .then((resp) => {
      return resp.body
    })
}
