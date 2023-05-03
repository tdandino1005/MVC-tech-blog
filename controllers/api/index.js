// Import the router from the express package
const router = require('express').Router();

// Import all of the API routes from the controllers
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Using the router, add the prefix of `/users` to the routes created in `userRoutes.js`
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;