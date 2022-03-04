const { Note } = require('../schema');

module.exports = {
  newNote: async (_, { content }) =>
    await Note.create({
      content,
      author: 'Maddison Matthews',
    }),
};
