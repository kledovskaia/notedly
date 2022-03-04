const notes = async ({ notes }, _, { models }) => {
  return await models.Note.find({ _id: { $in: notes } });
};

const favorites = async ({ favorites }, _, { models }) => {
  return await models.Note.find({ _id: { $in: favorites } });
};

module.exports = {
  notes,
  favorites,
};
