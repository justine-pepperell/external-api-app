import request from 'superagent'

// const serverURL = 'http://localhost:3000/api/v1'

// // *** EXAMPLE ***
// export function getWelcome() {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }
// // ***   ***   ***

export function getSpacePicture() {
  return request
    .get('https://api.nasa.gov/planetary/apod?api_key=' + process.env.NASA_KEY) //for tomorrow we can pick some different bits from the nasa api
    .then((response) => {
      console.log(response.body)
      console.log(process.env.NASA_KEY)
      return response.body
    })
}
