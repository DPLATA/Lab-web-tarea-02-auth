let router = require('express').Router();
let homepageController = require('../controllers/HomepageController');
let authController = require('../controllers/AuthController');
let usersController = require('../controllers/UsersController')
let authValidator = require('../validators/AuthValidator')
let passport = require('passport');
let dashboardController = require('../controllers/DashboardController');

router.get('/app/dashboard', dashboardController.index);

router.get('/', homepageController.index);

// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);

// Almacena el usuario
router.post('/store', authValidator.store ,usersController.store);
// ...

router.post('/login', passport.authenticate('local', { failureRedirect: '/login?authError=1', successRedirect: '/app/dashboard' }))
/*router.get('/protected', (req, res) => {
  res.send('Usuario logueado con éxito');
});
router.get('/login-fail', (req, res) => {
  res.send('El usuario no tiene una sesión válida');
});*/

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
