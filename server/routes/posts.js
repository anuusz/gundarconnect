const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { Post, Comment } = require('../models/Post');
const User = require('../models/User');

// Get all posts (feed)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        { model: User, as: 'author', attributes: ['id', 'username', 'fullName', 'avatar'] },
        { model: Comment, as: 'comments', include: [{ model: User, as: 'author', attributes: ['id', 'username', 'fullName', 'avatar'] }] },
        { model: User, as: 'likes', attributes: ['id', 'username'] }
      ]
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new post
router.post('/', protect, async (req, res) => {
  try {
    const { content, image } = req.body;
    const post = await Post.create({
      authorId: req.user.id,
      content,
      image
    });
    const populatedPost = await Post.findByPk(post.id, {
      include: [{ model: User, as: 'author', attributes: ['id', 'username', 'fullName', 'avatar'] }]
    });
    res.status(201).json(populatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Like/Unlike a post
router.post('/:postId/like', protect, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const user = await User.findByPk(req.user.id);
    const liked = await post.hasLike(user);
    if (!liked) {
      await post.addLike(user);
    } else {
      await post.removeLike(user);
    }
    const updatedPost = await Post.findByPk(post.id, {
      include: [{ model: User, as: 'likes', attributes: ['id', 'username'] }]
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add comment to post
router.post('/:postId/comments', protect, async (req, res) => {
  try {
    const { content, image } = req.body;
    const post = await Post.findByPk(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    const comment = await Comment.create({
      postId: post.id,
      authorId: req.user.id,
      content,
      image
    });
    const updatedPost = await Post.findByPk(post.id, {
      include: [
        { model: User, as: 'author', attributes: ['id', 'username', 'fullName', 'avatar'] },
        { model: Comment, as: 'comments', include: [{ model: User, as: 'author', attributes: ['id', 'username', 'fullName', 'avatar'] }] }
      ]
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete post
router.delete('/:postId', protect, async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    if (post.authorId !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this post' });
    }
    await post.destroy();
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
