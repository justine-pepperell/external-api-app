const path = require('path')
const server = require('./server')
const dotenv = require('dotenv')
const envPath = path.join(__dirname, '..', '.env')
dotenv.config({ path: envPath })
const port = process.env.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
