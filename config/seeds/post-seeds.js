const { Post } = require("../models");

// Added a user_id to the post seeds
const postData = [
  {
    title: "MVC",
    content:
      "Model-View-Controller pattern's purpose is to separate the concerns of data, presentation, and user interaction, making the code more organized and easier to maintain.",
    user_id: 1,
  },
  {
    title: "Middleware",
    content:
      "Middleware is a software component that sits between two or more software applications or systems, it acts as a bridge that connects different software components and helps them communicate and interact with each other.",
    user_id: 2,
  },
  {
    title: "Import an image to html file",
    content:
      "To import an image in HTML, you can use the <img> tag with the src attribute to specify the source URL of the image file.",
    user_id: 3,
  },
];

// Seed the database with the post seeds
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;