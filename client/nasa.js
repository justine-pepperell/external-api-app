
   
import request from 'superagent'

// const nasaApod = 'https://api.nasa.gov/planetary/apod'

export function getSpacePicture () {
  // query parameter
  return request
    .get('https://api.nasa.gov/planetary/apod?api_key=' + process.env.NASA_KEY)
    .then(resp => {
      console.log(resp.body)
      return resp.body
    })
}


// authentication bearer token
// authentication header
/*
  request
    .get('https://api.nasa.gov/planetary/apod')
    .set({ Authorization: 'Bearer RHpVzzSLOU4DXoxv4wNQXSLqBORvpMrNzLq9V4Ub'})
    .then(resp => {
      console.log(resp.body)
    })
*/