const Order = require("../models/ordersModel");

const createOrder = async (req, res) => {
  console.log(req.body);
  try {
    const { productName } = req.body;
    const order = await Order.create({ productName });
    if (order) {
      return res.status(200).json({ message: "order created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {createOrder}
