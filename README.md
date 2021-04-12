# Consuming External APIs!

## Setup

* Clone this repo

```sh
cd consuming-external-apis
npm install
npm run dev
```

* Navigate to [http://localhost:3000](http://localhost:3000)

## Getting started

This exercise reverses the roles from yesterday. Today our job will be to build the React frontend that consumes an API that has already been built (by someone else). We'll be using the node module `superagent` to make the API calls, and store the resulting data into component state.

We're going to start with a [random dog images API](https://dog.ceo/dog-api/documentation/random) (because who doesn't want to look at puppies :wink:) but you can use [any API you want](https://github.com/public-apis/public-apis)! We recommend following along with the dog images, or choose an API that doesn't enforce CORS or any auth to start with. Try another API with these things as a stretch once we get this one working!

Time to get building!

## Steps

1. Let's start by checking what we get back from our API with a tool like Insomnia or Postman. As per the [documentation for our dog images API](https://dog.ceo/dog-api/documentation/random), make a `GET` request to `https://dog.ceo/api/breeds/image/random`. Notice the shape of the data we got back - an object with `message` and `status` properties.

1. Now let's set up the components. Add a `useState` hook to `App.jsx`, so we can store the `dogImageUrl` in component state. Make the initial value an empty string.

1. Also add a `useEffect` hook to `App`. `useEffect` accepts a function as its first parameter. Eventually we will call the API from here, but for now just have this function do a `console.log('using the effect')`.
    - Remember to pass an empty array to `useEffect` as the second parameter (so that the function only runs once - when the component mounts).
    - Refresh the app in your browser the with DevTools console open. Make sure you can see your `useEffect` message.

1. Replace your `console.log` with using `superagent` to make a `GET` request to `https://dog.ceo/api/breeds/image/random`, just like we were doing with Insomnia.
    - Superagent uses a promise-based interface, so you will need to chain a `.then()` block after this.
    - Inside your `.then()` block, `console.log` the result of your request.
    - Refresh the app in your browser again. In the browser console, you should be seeing a big object, with all sorts of information about the HTTP response. The `body` property should contain data with the same shape as we saw in Insomnia earlier.
    - Instead of logging the entire response, make some changes to your `.then()` block so you're only logging the image url string from the `message`.

1. Remove the `console.log` and instead use the `setDogImageUrl` function (from your `useState`) to update the state with the image url from the API.
    - Use the React Dev Tools to check that the state updates as you expect.

1. Add an `img` to the `jsx` returned from `App`, with a `src` of your `dogImageUrl`.
    - Refresh the app in your browser and take in the doggo! (Refresh several times for maximum pup!)

## Stretch
* Refactor the `superagent` API call into a separate function (perhaps call it `getDogImage`) in a `client/api.js` file, and call that function within your `useEffect`.
* Try out [another API](https://github.com/public-apis/public-apis)! Consider one that enforces CORS. You'll need to consume that API from your server-side, and consume your own API from the client-side. You could also try an API that requires some authentication (i.e. with an API key.)



