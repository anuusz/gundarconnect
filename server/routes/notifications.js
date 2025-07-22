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
<<<<<<< HEAD
    
    // Emit socket event
    req.io.emit(`notification-update-${req.user.id}`, { 
      action: 'mark-read', 
      notificationId: notif.id 
    });
    
=======
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
    res.json({ message: 'Notification marked as read' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

<<<<<<< HEAD
// Mark all notifications as read
router.post('/mark-all-read', protect, async (req, res) => {
  try {
    await Notification.update(
      { isRead: true },
      { 
        where: { 
          userId: req.user.id,
          isRead: false 
        }
      }
    );
    
    // Emit socket event
    req.io.emit(`notification-update-${req.user.id}`, { action: 'mark-all-read' });
    
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

=======
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
// Delete notification
router.delete('/:id', protect, async (req, res) => {
  try {
    const notif = await Notification.findByPk(req.params.id);
    if (!notif || notif.userId !== req.user.id) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    await notif.destroy();
<<<<<<< HEAD
    
    // Emit socket event
    req.io.emit(`notification-update-${req.user.id}`, { 
      action: 'delete', 
      notificationId: notif.id 
    });
    
=======
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
    res.json({ message: 'Notification deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

<<<<<<< HEAD
// Get unread notifications count
router.get('/unread-count', protect, async (req, res) => {
  try {
    const count = await Notification.count({
      where: { 
        userId: req.user.id, 
        isRead: false 
      }
    });
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
=======
module.exports = router;
>>>>>>> 3f31e7a4a7e14e2527c841bb1345c7dd6cf03f5c
