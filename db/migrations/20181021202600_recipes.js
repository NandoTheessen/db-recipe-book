exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', recipes => {
    recipes.increments('recipe_id');
    recipes.integer('dish');
    recipes.string('recipe', 128);
    recipes.string('description', 1024);

    recipes
      .foreign('dish')
      .references('id')
      .inTable('dishes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
