let UserModel = require('../models/User')

exports.index = (req, res) => {
  let user = req.user;
  res.render('dashboard/index', {user: user});
}

exports.list = (req, res) => {
  UserModel.all()
  .then((data) => {
    let users = data
    res.render('dashboard/users', { user: users })
  }).catch((error) => console.log(error));
}
