# External APIs - Choose your own adventure!

To get started: 

* Clone this repo

```sh
cd consuming-external-apis
npm install
npm run dev
```

There is a basic API route set up for you - you may wish to use this as a template.

Choose an API to work with, and let's get building! 

Find your own, check out this [comprehensive list of options](https://github.com/public-apis/public-apis) or have a look at one of the suggestions below:

* http://wheretheiss.at/w/developer: get the lat/lon of the ISS
* https://eda-te-reo.herokuapp.com: get Maori proverbs and translations
* https://api.nasa.gov/api.html: a library of APIs from NASA
* https://eonet.sci.gsfc.nasa.gov/docs/v2.1: the Earth Observatory
* https://github.com/reedwade/metlink-api-maybe: unofficial api for Metlink in Wellington

## Things to remember
* Create the functions that make your API calls in `client/api.js`, and call those functions within your React components.
* If you choose an API that enforces CORS, you'll need to consume the API from the server-side. This is great practice, but you may wish to choose one that doesn't enforce CORS to start with.
