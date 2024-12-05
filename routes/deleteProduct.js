const Product = require("../models/product.js");

module.exports = async (req, res, next) => {

  Product.findById(req.params.id, (err, product) => {
    if (err) {
      console.error("Could not look up product: " + err);
    }
    if (!product) {
      return res.render("404");
    }

    res.render("deleteProductView", {
      title: "Admin Delete this product?",
      data: {
        id: product._id,
        sku: product.sku,
        description: product.description,
        user: res.locals.user,
        isAdmin: res.locals.isAdmin
      },
    });
  });
};