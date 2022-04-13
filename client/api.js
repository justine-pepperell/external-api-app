import request from 'superagent'

//const serverURL = 'http://localhost:3000/api/v1'

const catUrl = '/api/catFact'
///Random Cat facts URL //noooo its blocked by CORS
export function getCatFact() {
  return request.get(catUrl).then((response) => response.body)
}
