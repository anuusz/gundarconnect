const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const Notification = require('../models/Notification');
const User = require('../models/User');

// Get notifications for current user
router.get('/', protect, async (req, res) => {
  try {
    const notifications = await Notification.findAll({
      where: { userId: req.user.id },
      order: [['createdAt', 'DESC']],
      include: [
        { model: User, as: 'actor', attributes: ['id', 'username', 'fullName', 'avatar'] }
      ]
    });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mark notification as read
router.post('/:id/read', protect, async (req, res) => {
  try {
    const notif = await Notification.findByPk(req.params.id);
    if (!notif || notif.userId !== req.user.id) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    notif.isRead = true;
    await notif.save();
    res.json({ message: 'Notification marked as read' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete notification
router.delete('/:id', protect, async (req, res) => {
  try {
    const notif = await Notification.findByPk(req.params.id);
    if (!notif || notif.userId !== req.user.id) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    await notif.destroy();
    res.json({ message: 'Notification deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
