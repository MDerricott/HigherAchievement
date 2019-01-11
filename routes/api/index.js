const router = require('express').Router();
const userRoutes = require('./user');
const chartRoutes = require('./chart');
const centerRoutes = require('./center');

router.use('/user', userRoutes);
router.use('/chart', chartRoutes);
router.use('/center', centerRoutes);

module.exports = router;