import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Recipe from 'App/Models/Recipe';
import { RecipeRepository } from 'App/Repository/RecipeRepository';
import { RecipeSerializer } from 'App/Serializers/RecipeSerializer';
import PostValidator from 'App/Validators/PostValidator';

export default class RecipesController {

  public async index ({}: HttpContextContract) {
    return RecipeRepository.all(['name'])
  }
  
  public async store ({request}: HttpContextContract) {
    const data = await request.validate(PostValidator) 
    return RecipeSerializer.serializeFull(await Recipe.create(data))
  }

  public async create ({}: HttpContextContract) {
  }
  
  public async show ({params}: HttpContextContract) {
    return RecipeSerializer.serializeFull(await Recipe.query()
      .preload('ingredients', (query) => {
        query.pivotColumns(['quantity'])
      }) 
      .where('id', params.id)
      .firstOrFail())
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
