import Recipe from 'App/Models/Recipe'

export class RecipeSerializer {

  static serializeItem  (recipe: Recipe) {
    return recipe.serialize({
      fields: ['id', 'name', 'created_at']
    })
  }
  
  static serializeFull (recipe: Recipe) {
    return recipe.serialize({
      fields: ['id', 'name', 'created_at', 'updated_at', 'content'],
      relations: {
        ingredients: {
          fields: ['name', 'quantity', 'unit']
        }
      }
    })
  }
}