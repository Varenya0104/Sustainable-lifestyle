const express = require('express');
const router = express.Router();
const Challenge = require('../models/Challenge');

// Get all challenges
router.get('/', async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new challenge
router.post('/', async (req, res) => {
  const challenge = new Challenge(req.body);
  try {
    const newChallenge = await challenge.save();
    res.status(201).json(newChallenge);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
