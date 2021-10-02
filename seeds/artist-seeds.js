const Artist = require('../models');
const sequelize = require('../config/config');


const artistdata = [
    {
      title: 'Waterfall',
      author: 'Kyla Scott',
      genre: 'Abstract',
      price: '1000'
    },
]
const seedArtist = () => Post.bulkCreate(artistdata);

module.exports = seedArtist;