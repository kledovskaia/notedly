module.exports = {
  notes: async (_, __, { models }) => await models.Note.find(),
  note: async (_, { id }, { models }) => await models.Note.findById(id),
};
