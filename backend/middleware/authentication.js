const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (!req.cookies["access"]) return res.send("You are not authenticated");

  const decodedUser = jwt.verify(req.cookies["access"], process.env.SECRET);

  if (!decodedUser.id) {
    res.send("You are not authenticated");
  }
  req.user = decodedUser;
  next();
};
