const { verify } = require("jsonwebtoken");

const isAuth = async (req, res) => {
  try {
    const authorization = req.headers["authorization"];
    // console.log("isAuth : authorization : " + authorization);
    if (!authorization) throw new Error("Please login again");
    const token = authorization.split(" ")[1];
    const { userId } = await verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (userId == "undefined" || userId == "") {
      throw new Error("Please login again 3");
    } else {
      // console.log("isAuth : userId : " + userId);
      return userId;
    }
  } catch (err) {
    // console.log("Auth error : " + err.message);
    res.status(401).json({ message: err.message + ". Please login again" });
  }
};

module.exports = { isAuth };
