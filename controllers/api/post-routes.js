// import models
const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// Get all posts
router.post ('/', withAuth, async(req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });
      
        res.json(postData);
    } catch (err) {
        res.status(500).json(err);
    }   
});

// GET one post
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatePost = await Post.update(req.body, {
            where: {
                id: req.params.id
            },
        });
// If no post found with this id, return 404
        if (!updatePost) {
            res.status(200).json(updatePost);
        } else {
            res.status(404).json({ message: 'No post found with this id!' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE one post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletePost = await Post.destroy({
            where: {
                id: req.params.id
            },
        });
// If no post found with this id, return 404
        if (!deletePost) {
            res.status(200).json(deletePost);
        } else {
            res.status(404).json({ message: 'No post found with this id!' });
        }
    } catch (err) {
        res.status(500).json(err);

    }
});

module.exports = router;