//mongoose model must have a dateSent attribute
module.exports = function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;

    const results = {};

    results.totalResults = await model.countDocuments().exec();

    try {
      results.currentResults = await model
        .find()
        .sort({ dateSent: -1 })
        .limit(limit)
        .skip(startIndex)
        .exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
};
