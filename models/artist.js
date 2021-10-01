const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

class Artist extends Model {}

Artist.init ({

name: {
type: DataTypes.STRING,
allowNull: false,
validate: {len: [1]
   }
  }
},
{ sequelize }
);

module.export = Artist
