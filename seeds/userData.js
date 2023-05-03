const { User } = require('../models');

const userData = [
    {
        username: 'John Doe',
        password: 'password12345',
    },
    {
        username: 'Jane Doe',
        password: 'password012345',
    },
    {
        username: 'John Smith',
        password: 'password123456',
    },
    {
        username: 'Jane Smith',
        password: 'password1234567',
    },

];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
  });

module.exports = seedUser;