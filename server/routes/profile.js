const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const User = require('../models/User');
const { Post, Comment } = require('../models/Post');

// Get user profile
router.get('/:userId', protect, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: { exclude: ['password'] }
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const posts = await Post.findAll({
      where: { authorId: user.id },
      order: [['createdAt', 'DESC']],
      include: [
        { model: User, as: 'author', attributes: ['id', 'username', 'fullName', 'avatar'] },
        { model: Comment, as: 'comments', include: [{ model: User, as: 'author', attributes: ['id', 'username', 'fullName', 'avatar'] }] }
      ]
    });
    // Pastikan field bio dan avatar selalu ada
    const userData = {
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      bio: user.bio || '',
      avatar: user.avatar || '',
      major: user.major || ''
    };
    res.json({ user: userData, posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update user profile
router.put('/update', protect, async (req, res) => {
  try {
    const { fullName, bio, avatar } = req.body;
    const user = await User.findByPk(req.user.id);
    if (fullName) user.fullName = fullName;
    if (bio) user.bio = bio;
    if (avatar) user.avatar = avatar;
    await user.save();
    res.json({
      user: {
        id: user.id,
        username: user.username,
        fullName: user.fullName,
        bio: user.bio,
        avatar: user.avatar,
        major: user.major
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
