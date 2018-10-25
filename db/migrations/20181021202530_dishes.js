exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', dish => {
    dish.increments('dish_id');
    dish.string('dish', 128);
    dish.string('description', 1024);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dishes');
};
