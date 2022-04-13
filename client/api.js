import request from 'superagent'

const picsumURL = 'https://api.imgflip.com/get_memes'

// *** EXAMPLE ***
// export function getWelcome() {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }
// ***   ***   ***

export function getPic() {
  return request.get(`${picsumURL}`).then((response) => {
    console.log(response.body.data.memes[0].url)
    return response.body.data.memes[6].url
  })
}
