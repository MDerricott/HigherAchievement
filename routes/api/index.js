const router = require('express').Router();
const userRoutes = require('./users');
const chartRoutes = require('./chart');
const centerRoutes = require('./center');
const surveyRoutes = require('./survey')

router.use('/users', userRoutes);
router.use('/chart', chartRoutes);
router.use('/center', centerRoutes);
router.use('/survey', surveyRoutes);


module.exports = router;