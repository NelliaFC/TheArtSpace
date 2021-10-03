const Post = require('../models');
const sequelize = require('../config/config.js');//not sure if need it in seedUsers


const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'This is going to be the example of the post content',
    user_id: 10
  },
]

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;