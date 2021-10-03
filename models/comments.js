const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config.js');

class Comment extends Model{}

Comment.init(
{
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type:DataTypes.INTEGER,
    },
    post_id: {
        type: DataTypes.INTEGER,
    },

},
{ sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
}
);
module.export = Comment;