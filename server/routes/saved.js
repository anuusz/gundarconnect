<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { Post } = require('../models/Post');
const User = require('../models/User');
const SavedPost = require('../models/SavedPost');

// Associations (pastikan hanya dijalankan sekali di project, biasanya di models/SavedPost.js)
// User.belongsToMany(Post, { through: SavedPost, as: 'savedPosts', foreignKey: 'userId' });
// Post.belongsToMany(User, { through: SavedPost, as: 'savedBy', foreignKey: 'postId' });

// Save a post
router.post('/:postId/save', protect, async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user.id;
    // Pastikan postId valid
    const post = await Post.findByPk(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    // Cek apakah sudah tersimpan
    const [saved, created] = await SavedPost.findOrCreate({
      where: { userId, postId }
    });
    res.json({ success: true, saved: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Unsave a post
router.delete('/:postId/save', protect, async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.user.id;
    // Pastikan postId valid
    const post = await Post.findByPk(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    await SavedPost.destroy({ where: { userId, postId } });
    res.json({ success: true, saved: false });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all saved posts for user
router.get('/my', protect, async (req, res) => {
  try {
    const userId = req.user.id;
    // Ambil relasi SavedPost agar dapat createdAt (waktu disimpan)
    const savedPosts = await SavedPost.findAll({
      where: { userId },
      include: [{
        model: Post,
        as: 'post',
        include: [{ model: User, as: 'author', attributes: ['id', 'username', 'fullName', 'avatar'] }]
      }],
      order: [['createdAt', 'DESC']]
    });
    // Mapping agar frontend dapat field savedAt dan struktur post
    const result = savedPosts.map(item => {
      const post = item.post?.toJSON ? item.post.toJSON() : item.post
      return {
        ...post,
        savedAt: item.createdAt
      }
    })
    res.json(result)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
=======
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
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
