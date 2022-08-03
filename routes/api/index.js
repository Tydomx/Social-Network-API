// import all API routes to prefix their endpoint names and package them up
const router = require('express').Router();

const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);
// prefix of `/thoughts`
router.use('/thoughts', thoughtRoutes);

module.exports = router;