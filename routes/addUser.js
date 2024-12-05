module.exports = (req, res, next) => {
    res.render("addUserView", {
      title: "Create New Account",
      problem: req.query.problem,
    });
  };