const path = require('path')
const server = require('./server')
const dotenv = require('dotenv') //it uses dotenv -> because we have an environment variable in our .env = our secret key we dont want on github
const envPath = path.join(__dirname, '..', '.env') //Environment path
dotenv.config({ path: envPath }) //this config

const port = process.env.PORT || 3001 //

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
