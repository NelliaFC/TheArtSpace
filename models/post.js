const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');

class Post extends Model {}

Post.init({

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
    },
    user_id: {

        type: DataTypes.STRING, //maybe integer

     

    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
});

module.exports = Post;
