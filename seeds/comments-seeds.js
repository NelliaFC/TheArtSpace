const Comment = require('../models/comments-seeds.js');
const sequelize = require('../config/config');




const commentdata = [
  {
    comment_text: 'This art is amazing',
    user_id: 6,
    post_id: 1
  },
]

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;