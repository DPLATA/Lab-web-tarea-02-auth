// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');
const bcrypt = require('bcrypt')

exports.create = (user) => {
  let pass = user.password
  pass = bcrypt.hashSync(pass, 10)
  return knex('user')
    .insert({
      name: user.name,
      email: user.email,
      password: pass
    });
}

exports.findByEmail = (email) => {
  //console.log(knex('user').where({ email: email }));
  return knex('user').where({ 'email': email }).first()
}

// Obtiene todos los productos en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('user');
}
