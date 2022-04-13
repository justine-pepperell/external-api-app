import React, { useState } from 'react'
import { getRecipe } from '../recipe'

function RandRecipe() {

  const [recipe, setRecipe] = useState(null)

  function findRecipe() {
    getRecipe()
    .then((randRecipe) => {
      setRecipe(randRecipe)
    })
    .catch ((err) => {alert(err.messsage)})
  }



  return (
    <p>
      <button onClick={findRecipe}>Give me a recipe!</button>
      {recipe && recipe.recipes.map((each) => {each})}
      
    </p>
  )
}

export default RandRecipe