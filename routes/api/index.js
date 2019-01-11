const router = require('express').Router();
const userRoutes = require('./users');
const chartRoutes = require('./chart');
const centerRoutes = require('./center');

router.use('/users', userRoutes);
router.use('/chart', chartRoutes);
router.use('/center', centerRoutes);

module.exports = router;