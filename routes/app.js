let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');
let authValidator = require('../validators/AuthValidator')

router.get('/dashboard', dashboardController.index);

router.get('/users', authValidator.isAdmin, dashboardController.list)

module.exports = router;
