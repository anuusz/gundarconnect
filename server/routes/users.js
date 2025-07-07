const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const User = require('../models/User');

// Get all users
router.get('/', protect, async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['fullName', 'ASC']]
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search users
router.get('/search', protect, async (req, res) => {
  try {
    const { query } = req.query;
    const users = await User.findAll({
      where: {
        [User.sequelize.Op.or]: [
          { username: { [User.sequelize.Op.iLike]: `%${query}%` } },
          { fullName: { [User.sequelize.Op.iLike]: `%${query}%` } }
        ]
      },
      attributes: { exclude: ['password'] },
      limit: 10
    });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
