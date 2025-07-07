const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const { Post } = require('./Post');

class SavedPost extends Model {}

SavedPost.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'SavedPost',
  indexes: [{ unique: true, fields: ['userId', 'postId'] }]
});

// Associations
User.belongsToMany(Post, { through: SavedPost, as: 'savedPosts', foreignKey: 'userId' });
Post.belongsToMany(User, { through: SavedPost, as: 'savedBy', foreignKey: 'postId' });

module.exports = SavedPost;