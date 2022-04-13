import React, { useState } from 'react'
import { getRecipe } from '../recipe'

function RandRecipe() {

  const [recipe, setRecipe] = useState(null)
  const [recipeVisible, setRecipeVisible] = useState(false)

  function findRecipe() {
    getRecipe()
    .then((randRecipe) => {
      setRecipe(randRecipe)
      setRecipeVisible(true)
    })
    .catch ((err) => {alert(err.messsage)})
  }

  return (
    <>
      <button onClick={findRecipe}>{recipeVisible ? 'Another One!' : 'Give me a recipe!'}</button>

      <a href={recipe && recipe.recipes[0].sourceUrl}><h2>{recipe && recipe.recipes[0].title}</h2></a>

      <img src={recipe && recipe.recipes[0].image} />
      <br>
      </br>
      <> 
        {recipe && 'Things you will need are:'} 
        <br></br>
        <ul>
        {recipe && recipe.recipes[0].extendedIngredients.map((ingred) => 
          <li key={ingred.id}>{ingred.original}</li>
        )}
        </ul>
      </>
      {recipe && 'Instructions:'}
      <br></br>
      {recipe && recipe.recipes[0].instructions.replace('</li><li>', '').replace('</ol>', '').replace('<ol>', '')}
    </>
  )
}

export default RandRecipe
