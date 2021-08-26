import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ingredients extends BaseSchema {
  protected tableName = 'ingredients'

  public async up () {
    // this.schema.createTable(this.tableName, (table) => {
    //   table.increments('id').primary().unique().notNullable()
    //   table.string('name').unique().notNullable()
    //   table.string('unit').notNullable()
    // })
    
    this.schema.createTable('rec_ing', (table) => {
      table.increments('id').primary().unique().notNullable()
      table.integer('rec_id').references('id').inTable('recipes').onDelete('CASCADE')
      table.integer('ing_id').references('id').inTable('ingredients').onDelete('CASCADE')
      table.integer('quantity')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
