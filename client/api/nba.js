import request from 'superagent'

const nbaUrl = 'https://www.balldontlie.io/api/v1/players/'

// export function getNbaStat() {
//   return request.get(nbaUrl + 'players?search=nikola').then((resp) => {
//     console.log(resp.body.data)
//     return resp.body.data
//   })
// }

export function searchNbaStat(search) {
  return request.get(nbaUrl + '?search=' + search).then((resp) => {
    console.log(resp.body.data)
    return resp.body.data
  })
}
