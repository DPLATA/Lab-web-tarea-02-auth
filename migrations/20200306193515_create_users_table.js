exports.up = function(knex) {
  return knex.schema
    .createTable('user', (table) => {
      table.increments('id');
      table.string('name', 255).notNullable();
      table.string('email', 512).notNullable();
      table.string('password', 512);
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('user');
};
