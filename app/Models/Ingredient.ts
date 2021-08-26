import { BaseModel, column, computed,  manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Recipe from 'App/Models/Recipe'

export default class Ingredient extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public unit: string

  @manyToMany(() => Recipe)
  public recipes: ManyToMany<typeof Recipe>

  @computed()
  public get quantity () {
    return this.$extras.pivot_quantity
  }
}
