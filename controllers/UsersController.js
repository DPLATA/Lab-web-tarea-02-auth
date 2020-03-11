/*exports.create = (user) => {       PREGUNTAR SI ES MEJOR ALMACENAR LOS EXPORTS EN EL MODELO O EL CONTROLADOR
  return knex('user')
    .insert({
      name: user.name,
      email: user.email,
      password: user.password
    });
}

// Obtiene todos los usuarios en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('user');
}
*/
const { validationResult } = require('express-validator')

let UserModel = require('../models/User')
// ...
// Almacena el usuario
exports.store = (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  //Tiene que ir en el controller por la parte de req res
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //return res.status(422).json({ errors: errors.array() });
    req.flash('errors', errors.array());
    console.log(errors);
    return res.redirect('back');
  }
  // Crea un objeto con la información del usuario
  let user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };
  // Crea el usuario
  UserModel.create(user)
    .then((id) => {
      // Al finalizar la creación, reenvía al usuario a la página
      //console.log(id);
      // inicial
      res.redirect('/');
    }).catch((error) => console.log(error));
}

exports.list = (req, res) => {
  UserModel.all()
  .then((data) => {
    let users = data
    res.render('dashboard/users', { user: users })
  }).catch((error) => console.log(error));
}

//No muestra el nombre del usuario.
exports.index = (req, res) => {
  let user = req.body;
  console.log('usuario: ', req.user);
  res.render('dashboard/index', {user: user});
}

// controllers/UsersController.js
/*exports.register = (req, res) => {
  res.render('auth/register', {
    layout: 'auth',
    errors: req.flash('errors')
  });
}*/
