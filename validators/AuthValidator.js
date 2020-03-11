const { check } = require('express-validator')

exports.store = [
  check('name').notEmpty(),
  // username must be an email
  check('email').isEmail(),
  // password must be not empty
  check('password').notEmpty(),
  //verifica que el password sea el mismo
  check('password').custom((value, {req, loc, path}) => {
    if (value !== req.body.password_confirm) {
      throw new Error("Passwords don't match");
    } else {
      return value;
    }
  }),
  //verifica el rol
  check('role').notEmpty()
];

exports.admin = [
  check('role').custom((value, {req, loc, path}) => {
    if (value !== 'admin') {
      throw new Error("Authorized access prohibited");
    } else {
      return value;
    }
  })
]
