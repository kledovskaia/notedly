const note = async (_, { id }, { models }) => await models.Note.findById(id);
const notes = async (_, __, { models }) => await models.Note.find();

const me = async (_, __, { models, user }) => {
  return await models.User.findById(user.id);
};
const user = async (_, { id, username }, { models }) => {
  return await models.User.findOne({
    $or: [{ _id: id }, { username }],
  });
};
const users = async (_, __, { models }) => await models.User.find();

module.exports = {
  me,
  user,
  note,
  users,
  notes,
};
