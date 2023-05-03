// import sequelize connection
const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all posts for dashboard
router.get('/', async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Post.findAll({
            include: [User],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {posts, login: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findOne(req.params.id, {
          where: {
            id: req.params.id,
          },    
            include: [
                {
                    model: Comment,
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
    
        // serialize the data
        if (postData) {
            const post = postData.get({ plain: true });
    //  create a new post by id
            res.render("post-by-id", { post, logged_in: req.session.logged_in });
          } else {
            res.status(404).end();
          }
        //   Use catch to handle the promise rejection
        } catch (err) {
          res.status(500).json(err);
        }
      });
      
        // Route to login page
      router.get("/login", (req, res) => {
        res.render("login");
      });

      module.exports = router;

      