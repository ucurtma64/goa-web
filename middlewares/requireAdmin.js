module.exports = (req, res, next) => {
  if (!req.user.role) {
    return res.status(403).send({ error: "You must be an admin!" });
  }

  if (req.user.role !== "admin") {
    return res.status(405).send({ error: "You must be an admin!" });
  }

  next();
};
