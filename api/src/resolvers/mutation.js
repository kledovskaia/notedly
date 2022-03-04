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

    return await jwt.sign({ _id }, JWT_SECRET);
  } catch (err) {
    console.error(err);
    throw new Error('Error Creating Account');
  }
};

const signIn = async (_, { username, email, password }, { models }) => {};

const newNote = async (_, { content }, { models }) =>
  await models.Note.create({
    content,
    author: 'Maddison Matthews',
  });

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
