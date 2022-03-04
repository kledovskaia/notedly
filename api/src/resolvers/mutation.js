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
  newNote,
  updateNote,
  deleteNote,
};
