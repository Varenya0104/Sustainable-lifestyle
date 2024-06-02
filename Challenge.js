const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  tips: [String],
  points: Number,
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
