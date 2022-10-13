const User = require("../models/userModels");

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const { firstName, lastName, email } = req.body;
    const user = await User.create({ firstName, lastName, email });
    console.log(user);
    if(user){
        return res.status(200).json({message:"user created successfully"})
    }
  } catch (error) {
    console.log(error);
  }
};



module.exports = {createUser}