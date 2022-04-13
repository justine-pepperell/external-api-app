import request from 'superagent'

export function getRecipe() {
  return request
    .get(
      'https://api.spoonacular.com/recipes/random?number=1&tags=pasta&apiKey=5ffc785609bc4af29acadebca508dcb5&'
    )
    .then((response) => {
      console.log(response.body)
      return response.body
    })
}
