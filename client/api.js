import request from 'superagent'

const memeURL = 'https://api.imgflip.com/get_memes'

// *** EXAMPLE ***
// export function getWelcome() {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }
// ***   ***   ***

export function getMeme() {
  return request.get(`${memeURL}`).then((response) => {
    console.log(response.body.data.memes[12].url)
    return response.body.data.memes[12].url
  })
}
