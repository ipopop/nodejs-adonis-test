import Recipe from 'App/Models/Recipe'

export class RecipeRepository {

  static all (fields: string[]) {
    return Recipe.query().select(fields)
  }
}