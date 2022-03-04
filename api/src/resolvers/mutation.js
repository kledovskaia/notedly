const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {
  AuthenticationError,
  ForbiddenError,
} = require('apollo-server-express');
require('dotenv').config();

const gravatar = require('../util/gravatar');
const normalize = str => str.trim().toLowerCase();

const { JWT_SECRET } = process.env;

const signUp = async (_, { username, email, password }, { models }) => {
  username = normalize(username);
  email = normalize(email);

  const hashed = await bcrypt.hash(password, 10);

  const avatar = gravatar(email);

  try {
    const { _id } = await models.User.create({
      username,
      email,
      avatar,
      password: hashed,
    });

    return jwt.sign({ _id }, JWT_SECRET);
  } catch (err) {
    console.error(err);
    throw new Error('Error Creating Account');
  }
};

const signIn = async (_, { username, email, password }, { models }) => {
  if (username) username = normalize(username);
  if (email) email = normalize(email);

  const user = await models.User.findOne({
    $or: [{ email }, { username }],
  });
  if (!user) throw new AuthenticationError('User not found');

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new AuthenticationError('Wrong password');

  return jwt.sign({ _id: user._id }, JWT_SECRET);
};

const newNote = async (_, { content }, { models, user }) => {
  if (!user) {
    throw new AuthenticationError('You must be signed in to create a note');
  }

  return await models.Note.create({
    content,
    author: mongoose.Types.ObjectId(user.id),
  });
};

const updateNote = async (_, { id, content }, { models }) => {
  return await models.Note.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        content,
      },
    },
    {
      new: true,
    }
  );
};

const deleteNote = async (_, { id }, { models }) => {
  try {
    await models.Note.findOneAndRemove({ _id: id });
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = {
  signIn,
  signUp,
  newNote,
  updateNote,
  deleteNote,
};
