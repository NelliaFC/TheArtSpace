const { Model, DataTypes} = require('sequelize/model');
const sequelize = require('../config/config.js');

class Comment extends Model{}

Comment.init(
{
    body: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{ sequelize}
);
module.export = Comment;