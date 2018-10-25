exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', tbl => {
    tbl.increments('ingredient_id');
    tbl.string('ingredient_name', 128);
    tbl
    .integer('amount')
    .unsigned()
    tbl.string('measurement', 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
