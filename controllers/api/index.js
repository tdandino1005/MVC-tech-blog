// Import the router from the express package
const router = require('express').Router();

// Import all of the API routes from the controllers
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// Using the router, add the prefix of `/users` to the routes created in `userRoutes.js`
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;