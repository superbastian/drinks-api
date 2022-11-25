# Drinks API for development

This is a Drinks API for creating a frontend

## How to run

1. Install packages with `yarn install`.
2. Run the project with `yarn start`.
3. Check endpoints in `http://localhost:3000`.

## Endpoints:

- **Get 10 Random Drinks for a homepage**

  - Method: GET
  - Route: `/homepage`
  - Returns: `Drink[]`

- **Get A Specific Drink by Id**

  - Method: GET
  - Route: `/drink/{id}`
  - Returns: `Drink`
  - Params:
    - `id`: Id of the drink to retrieve.

- **Search for drinks by term**
  - Method: GET
  - Route: `/drink/search`
  - Returns: `Drink[]`
  - Query Parameters:
    - `search`: Search term to request.

## Response Objects:

- **Drink**:

  - Example:

  ```JSON
    {
      "id": "11007",
      "name": "Margarita",
      "glass": "Cocktail glass",
      "category": "Ordinary Drink",
      "thumbnail": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      "is_alcoholic": true,
      "instructions": {
        "EN": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
        "ES": null,
        "DE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
        "FR": null,
        "IT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere."
      },
      "ingredients": [
        {
          "ingredient": "Tequila",
          "measure": "1 1/2 oz "
        },
        {
          "ingredient": "Triple sec",
          "measure": "1/2 oz "
        },
        {
          "ingredient": "Lime juice",
          "measure": "1 oz "
        },
        {
          "ingredient": "Salt",
          "measure": null
        }
      ]
    }
  ```

  - Fields:
    - `id`: ID of the drink.
    - `name`: Name of the drink.
    - `glass`: Glass used for this drink.
    - `thumbnail`: Image for this drink.
    - `is_alcoholic`: `true` if is an alcoholic drink, false if not.
    - `instructions`: List of instructions on how to do this drink, on various languages.
    - `ingredients`:
      List of ingredients used to create this drink.
      - `Ingredient`: Ingredient Used.
      - `Measure`: Measure of this ingredient.
