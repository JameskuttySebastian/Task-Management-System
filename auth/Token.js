const { sign } = require("jsonwebtoken");

const createAccessToken = (userId) => {
  return sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const sendAccessToken = (req, type, res, accesstoken) => {
  res.status(200).json({
    accesstoken,
    email: req.body.email,
    userType: type,
  });
};

// const createRefreshToken = (userId) => {
//   return sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: "7d",
//   });
// };

// const sendAccessToken = (req, res, accesstoken) => {
//   res.send({
//     accesstoken,
//     email: req.body.email,
//   });
// };

// const sendRefreshToken = (res, refreshtoken) => {
//   res.cookie("refreshtoken", refreshtoken, {
//     httpOnly: true,
//     path: "/refresh_token",
//   });
// };

module.exports = {
  createAccessToken,
  sendAccessToken,
};
