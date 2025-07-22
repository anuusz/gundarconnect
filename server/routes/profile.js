<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const User = require('../models/User');
const { Post, Comment } = require('../models/Post');
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
const upload = require('../middleware/upload');

// Get user profile by username
router.get('/username/:username', async (req, res) => {
  try {
    const user = await User.findOne({
      where: { username: req.params.username },
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
<<<<<<< HEAD
=======
=======
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
// Update user profile (support upload avatar)
router.put('/update', protect, upload.single('avatar'), async (req, res) => {
  try {
    const { fullName, bio } = req.body;
    const user = await User.findByPk(req.user.id);
    if (fullName) user.fullName = fullName;
    if (bio) user.bio = bio;
    if (req.file) {
      // Simpan path avatar relatif ke public
      user.avatar = `/uploads/${req.file.filename}`;
      console.log('Avatar path saved:', user.avatar);
    }
    await user.save();
    console.log('User after save:', user.dataValues);
<<<<<<< HEAD
=======
=======
// Update user profile
router.put('/update', protect, async (req, res) => {
  try {
    const { fullName, bio, avatar } = req.body;
    const user = await User.findByPk(req.user.id);
    if (fullName) user.fullName = fullName;
    if (bio) user.bio = bio;
    if (avatar) user.avatar = avatar;
    await user.save();
>>>>>>> fb37265c2135560a94d7333e047a456d37bab737
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
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
