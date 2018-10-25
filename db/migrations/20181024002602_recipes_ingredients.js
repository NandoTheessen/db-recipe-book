exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes_ingredients', tbl => {
    tbl.increments('id');
    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable();
    tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable();

    tbl
      .foreign('recipe_id')
      .references('recipe_id')
      .inTable('recipes');
    tbl
      .foreign('ingredient_id')
      .references('ingredient_id')
      .inTable('ingredients');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_ingredients');
};
