module.exports = (req, res, next) => {
    res.render("addProductView", {
      title: "Admin Add a product",
    });
  };