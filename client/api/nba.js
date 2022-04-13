import request from 'superagent'

const nbaUrl = 'https://www.balldontlie.io/api/v1/'

export function searchNbaName(search) {
  return request.get(nbaUrl + 'players/?search=' + search).then((resp) => {
    return resp.body.data
  })
}

export function searchNbaStats(id) {
  return request
    .get(nbaUrl + 'season_averages?player_ids[]=' + id)
    .then((resp) => {
      return resp.body.data
    })
}
