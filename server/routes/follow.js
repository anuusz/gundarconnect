const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const Follow = require('../models/Follow');
const User = require('../models/User');

// Follow a user
router.post('/:userId', protect, async (req, res) => {
  try {
    const followerId = req.user.id;
    const followingId = parseInt(req.params.userId);
    if (followerId === followingId) return res.status(400).json({ message: 'You cannot follow yourself.' });
    const [follow, created] = await Follow.findOrCreate({ where: { followerId, followingId } });
    res.json({ followed: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Unfollow a user
router.delete('/:userId', protect, async (req, res) => {
  try {
    const followerId = req.user.id;
    const followingId = parseInt(req.params.userId);
    await Follow.destroy({ where: { followerId, followingId } });
    res.json({ followed: false });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get followers of a user
router.get('/:userId/followers', async (req, res) => {
  try {
    const followers = await Follow.findAll({
      where: { followingId: req.params.userId },
      include: [{ model: User, as: 'Follower', attributes: ['id', 'username', 'fullName', 'avatar'] }]
    });
    res.json(followers.map(f => f.Follower));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get following of a user
router.get('/:userId/following', async (req, res) => {
  try {
    const following = await Follow.findAll({
      where: { followerId: req.params.userId },
      include: [{ model: User, as: 'Following', attributes: ['id', 'username', 'fullName', 'avatar'] }]
    });
    res.json(following.map(f => f.Following));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
