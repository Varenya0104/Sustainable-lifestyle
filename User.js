const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  points: Number,
  completedChallenges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' }],
});

module.exports = mongoose.model('User', UserSchema);
