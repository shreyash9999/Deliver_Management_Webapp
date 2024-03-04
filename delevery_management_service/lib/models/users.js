
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  prn: {
    type: String,
    required: true,
  },
  mobileno: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
