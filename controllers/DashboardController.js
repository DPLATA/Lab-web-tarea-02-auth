exports.index = (req, res) => {
  let user = req.body;
  console.log('usuario: ', req.user);
  res.render('dashboard/index', {user: user});
}
