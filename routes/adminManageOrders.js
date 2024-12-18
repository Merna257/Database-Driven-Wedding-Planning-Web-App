const Order = require("../models/order.js");

module.exports = async (req, res, next) => {
  let query = req.query.user ? {username: req.query.user} : {};

  let orders = await Order.find(query).sort("purchaseDate");

  let results = orders.map((order) => {
    return {
      id: order._id,
      sku: order.sku,
      username: order.username,
      date: order.purchaseDate,
      quantity: order.quantityOrdered,
      total: order.invoiceTotal.toFixed(2),
    };
  });

  res.render("displayOrdersView", {
    title: "Manage All Customer Orders",
    data: results,
    manageView: true,
    problem: req.query.problem,
    success: req.query.success,
    filteruser: req.query.user
  });
};