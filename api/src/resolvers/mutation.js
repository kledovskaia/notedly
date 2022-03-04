const newNote = async (_, { content }, { models }) =>
  await models.Note.create({
    content,
    author: 'Maddison Matthews',
  });

const updateNote = async (_, { id, content }, { models }) => {};

const deleteNote = async (_, { id }, { models }) => {
  try {
    await models.Note.findOneAndRemove({ _id: id });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports = {
  newNote,
  updateNote,
  deleteNote,
};
