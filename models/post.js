const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

class Post extends Model {}

Post.init(
  {
      
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    
    image: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: 'Personal'
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User', //might have to use 'user'
  }
);

module.exports = Post;
