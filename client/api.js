import request from 'superagent'

const proverbApiUrl = 'https://eda-te-reo.herokuapp.com/api/proverbs'

export function getMaoriProverb () {
  return request
    .get(proverbApiUrl)
    .then(resp => {
      console.log(resp.body)
      return resp.body
    })
}