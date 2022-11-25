const ingredientParser = (drink) => {
  const ingredients = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
    drink.strIngredient6,
    drink.strIngredient7,
    drink.strIngredient8,
    drink.strIngredient9,
    drink.strIngredient10,
    drink.strIngredient11,
    drink.strIngredient12,
    drink.strIngredient13,
    drink.strIngredient14,
    drink.strIngredient15,
  ] 

  const measures = [
    drink.strMeasure1,
    drink.strMeasure2,
    drink.strMeasure3,
    drink.strMeasure4,
    drink.strMeasure5,
    drink.strMeasure6,
    drink.strMeasure7,
    drink.strMeasure8,
    drink.strMeasure9,
    drink.strMeasure10,
    drink.strMeasure11,
    drink.strMeasure12,
    drink.strMeasure13,
    drink.strMeasure14,
    drink.strMeasure15,
  ]

  return ingredients
    .map((ing, indx) => {
    if (!ing)
      return null

    return {
      ingredient: ing,
      measure: measures[indx]
    }
    }).filter(_ => !!_)

}

module.exports.formatter = (drink) => {
  return {
    id: drink.idDrink,
    name: drink.strDrink,
    glass: drink.strGlass,
    category: drink.strCategory,
    thumbnail: drink.strDrinkThumb,
    is_alcoholic: drink.strAlcoholic === 'Alcoholic',
    instructions: {
      EN: drink.strInstructions,
      ES: drink.strInstructionsES,
      DE: drink.strInstructionsDE,
      FR: drink.strInstructionsFR,
      IT: drink.strInstructionsIT,
    },
    ingredients: ingredientParser(drink)
  }
}