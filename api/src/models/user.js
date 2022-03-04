const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
    },
    username: {
      type: String,
      required: true,
      index: { unique: true },
    },
    email: {
      type: String,
      required: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
