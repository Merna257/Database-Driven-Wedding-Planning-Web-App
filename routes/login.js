module.exports = (req, res, next) => {
    res.render("loginView", {
      title: "Login",
      newUser: req.query.newUser,
    });
  };