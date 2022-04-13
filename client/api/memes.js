import request from 'superagent'

const memeUrl = 'https://api.imgflip.com/get_memes'

export function getAllMemes() {
  return request.get(memeUrl).then((resp) => {
    return resp.body.data.memes
  })
}
