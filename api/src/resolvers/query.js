const note = async (_, { id }, { models }) => await models.Note.findById(id);
const notes = async (_, __, { models }) => await models.Note.find().limit(100);

const me = async (_, __, { models, user }) => {
  return await models.User.findById(user.id);
};
const user = async (_, { id, username }, { models }) => {
  return await models.User.findOne({
    $or: [{ _id: id }, { username }],
  });
};
const users = async (_, __, { models }) => await models.User.find().limit(100);

const noteFeed = async (_, { cursor }, { models }) => {
  const limit = 10;
  let hasNextPage = false;
  let cursorQuery = !cursor ? {} : { _id: { $lt: cursor } };

  let notes = await models.Note.find(cursorQuery)
    .sort({ _id: -1 })
    .limit(limit + 1);

  let newCursor = '';
  if (notes.length > limit) {
    hasNextPage = true;
    notes = notes.slice(0, -1);
    newCursor = notes[notes.length - 1]._id;
  }

  return {
    notes,
    cursor: newCursor,
    hasNextPage,
  };
};

module.exports = {
  me,
  user,
  note,
  users,
  notes,
  noteFeed,
};
