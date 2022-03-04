const note = async (_, { id }, { models }) => await models.Note.findById(id);
const notes = async (_, __, { models }) => await models.Note.find();

const me = async (_, __, { user }) => user;
const user = async (_, { id }, { models }) => await models.User.findById(id);
const users = async (_, __, { models }) => await models.User.find();

module.exports = {
  me,
  user,
  note,
  users,
  notes,
};
