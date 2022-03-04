const author = async ({ author }, _, { models }) => {
  return await models.User.findById(author);
};
const favoritedBy = async ({ favoritedBy }, _, { models }) => {
  return await models.User.find({ _id: { $in: favoritedBy } });
};

module.exports = {
  author,
  favoritedBy,
};
