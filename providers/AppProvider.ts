import { ApplicationContract } from '@ioc:Adonis/Core/Application'
// import { RecipeRepository } from 'App/Repository/RecipeRepository'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // this.app.container.singleton('App/Repository/RecipeRepository', () => new RecipeRepository())
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
