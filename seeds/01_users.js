
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, name: 'John Doe', email: '123@example.com', password: 'password1'},
        {id: 2, name: 'Juan Perez', email: '1234@example.com', password: 'password2'},
        {id: 3, name: 'Juana Perez', email: '12345@example.com', password: 'password3'},
      ]);
    });
};
