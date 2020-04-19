const { verify } = require("jsonwebtoken");

const isAuth = (req) => {
  try {
    const authorization = req.headers["x-authorization"];
    if (!authorization) throw new Error("Please login again");
    const token = authorization.split(" ")[1];
    const { userId } = verify(token, process.env.ACCESS_TOKEN_SECRET);
    return userId;
  } catch (err) {
    console.log("Auth error : " + err.message);
  }
};

module.exports = { isAuth };
