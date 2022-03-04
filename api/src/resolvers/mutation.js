module.exports = {
  newNote: async (_, { content }, { models }) =>
    await models.Note.create({
      content,
      author: 'Maddison Matthews',
    }),
};
