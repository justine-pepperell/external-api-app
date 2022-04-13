import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'
const MariolURL = 'https://mario-kart-tour-api.herokuapp.com/api/v1/'

export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}

// api/v1/drivers
export function getRandomDriver() {
  return request.get(MariolURL + 'drivers').then((resp) => {
    return resp.body
  })
}

// api/v1/karts
export function getRandomCourse() {
  return request.get(MariolURL + 'courses/normal').then((resp) => {
    return resp.body
  })
}
