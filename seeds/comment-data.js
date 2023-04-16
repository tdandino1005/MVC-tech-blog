const { Comment } = require("../models");

const commentData = [
  {
    comment_content: "Great info, thank you",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_content: "I wasn't aware of that!",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_content: "I appreciate the info",
    user_id: 1,
    post_id: 2,
  },
  {
    comment_content: "Thanks for the informaton!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content: "Great info, thank you",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_content: "I didn't know that!",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_content: "Thanks for the help!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_content: "Thanks for the tip!.",
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;