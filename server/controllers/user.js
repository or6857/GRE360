const User = require("../models/userModel");

exports.getUserDetails = async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json({
    message: "Success",
    data: user,
  });
};
