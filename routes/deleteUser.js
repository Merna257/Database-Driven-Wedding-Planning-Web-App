const User = require("../models/user.js");

module.exports = async (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      console.error("Could not look up user: " + err);
    }
    if (!user) {
      return res.render("404");
    }

    res.render("deleteUserView", {
      title: "Admin Delete This User?",
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  });
};