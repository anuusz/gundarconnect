const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

class Post extends Model {}

Post.init({
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Post'
});

class Comment extends Model {}

Comment.init({
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Comment'
});

<<<<<<< HEAD


=======
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
// Associations
User.hasMany(Post, { foreignKey: 'authorId', as: 'posts' });
Post.belongsTo(User, { foreignKey: 'authorId', as: 'author' });

Post.hasMany(Comment, { foreignKey: 'postId', as: 'comments' });
Comment.belongsTo(Post, { foreignKey: 'postId' });
Comment.belongsTo(User, { foreignKey: 'authorId', as: 'author' });
User.hasMany(Comment, { foreignKey: 'authorId', as: 'userComments' });

// Likes (Many-to-Many)
Post.belongsToMany(User, { through: 'PostLikes', as: 'likes', foreignKey: 'postId' });
User.belongsToMany(Post, { through: 'PostLikes', as: 'likedPosts', foreignKey: 'userId' });

<<<<<<< HEAD
module.exports = { Post, Comment };
=======
module.exports = { Post, Comment };
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
