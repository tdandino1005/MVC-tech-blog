// import the router from express
const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all posts for dashboard
router.get('/', withAuth, async (req, res) => {
    try {
        // Get all posts and JOIN with user data
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
//  create a new post
        const posts = postData.map((post) => post.get({ plain: true }));
// when the user clicks on a post, it will take them to the edit page
        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in,
        });

    }
    catch (err) {
        res.redirect('/');
    }
});

// Get route for clicking on a new post
router.get('/new', withAuth, (req, res) => {
    res.render('new-post', {
        logged_in: req.session.logged_in,
    });
});

// Get route for clicking on a post to edit
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });
// create a new post
        const post = postData.get({ plain: true });

        res.render('edit-post', {
            post,
            logged_in: req.session.logged_in,
        });
    }
    // if there is an error, redirect to the dashboard
    catch (err) {
        res.redirect('/');
    }
});

module.exports = router;

