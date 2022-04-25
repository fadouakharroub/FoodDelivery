module.exports =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.send("you don't have authorization");
    }
    next();
  };
