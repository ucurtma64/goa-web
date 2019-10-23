//model must have
module.exports = function requireAdmin(model) {
  return async (req, res, next) => {
    if (!req.user._id) {
      return res.status(401).send({ error: "You must be logged in!" });
    }

    userId = req.user._id;

    try {
      const result = await model.findById(userId);

      if (!result.role) {
        return res.status(401).send({ error: "You must be an admin!" });
      }

      if (result.role != "admin") {
        return res.status(401).send({ error: "You must be an admin!" });
      }

      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
};
