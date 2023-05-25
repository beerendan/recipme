const router = require('express').Router();

const userRoutes = require('../routes/user.route');

router.use('/users', userRoutes);

module.exports = router;
