const sequelize = require('../config/config.js');

const User = require('../models')

const userdata = [
{
    username: 'nellbell1',
    email: 'localhost',
    password: 'password123'
}
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});


module.exports = seedUsers;