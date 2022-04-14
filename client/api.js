import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

const numberURL = 'https://api.math.tools/numbers/nod'

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***

export function getNumber() {
  return request.get(`${numberURL}`).then((res) => {
    console.log(res.body.contents.nod.numbers)
    return res.body.contents.nod.numbers
  })
}
