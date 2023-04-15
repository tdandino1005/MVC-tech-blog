// import all models here
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Post belongsTo User
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// User has many Comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// Comment belongsTo User
Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

// Post has many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

// Comment belongsTo Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

// export all models
module.exports = { User, Post, Comment };
