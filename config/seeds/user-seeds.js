const { User } = require('../models');

const userData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@me.com',
        password: 'password12345',
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'janed@me.com',
        password: 'password012345',
    },
    {
        id: 3,
        name: 'John Smith',
        email: 'jsmith@me.com',
        password: 'password123456',
    },
    {
        id: 4,
        name: 'Jane Smith',
        email: 'janesmith@me.com',
        password: 'password1234567',
    },

];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
