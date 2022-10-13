const User = require("../models/userModels");
const Order = require("../models/ordersModel");

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const { firstName, lastName, email } = req.body;
    const user = await User.create({ firstName, lastName, email });
    console.log(user);
    if (user) {
      return res.status(200).json({ message: "user created successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

const displayOrders = async (req, res) => {
  console.log(req.params.id);

  try {
    const displayList = await Order.find().populate("user_id");
    console.log(displayList);
    return res.status(200).json(displayList );
  } catch (error) {}
};

module.exports = { createUser, displayOrders };
