const { Note } = require('../schema');

module.exports = {
  notes: async () => await Note.find(),
  note: async (_, { id }) => await Note.findById(id),
};
