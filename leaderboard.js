// backend/routes/leaderboard.js
const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.find().sort({ points: -1 });
  res.send(users.map((user, index) => ({
    userId: user._id,
    points: user.points,
    rank: index + 1,
  })));
});

module.exports = router;
