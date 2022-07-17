const User = require("../models/userModel");

exports.getUserDetails = async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.json({
    message: "Success",
    data: user,
  });
};

exports.updateScore = async (req, res, next) => {
  let id = req.params.id;

  let updated = User.findByIdAndUpdate(
    id,
    {
      $set: {
        score_1: req.body.score_1,
        score_2: req.body.score_2,
      },
    },
    (err, user) => {
      if (err) {
        res.json({
          message: "There was an error",
          error: err,
        });
      } else {
        res.json({
          message: "Details updated",
          data: updated,
        });
      }
    }
  );
};
