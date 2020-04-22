const db = require("../models");
const { hashSync, compare } = require("bcryptjs");
const { createAccessToken, sendAccessToken } = require("../auth/Token");

// send access token in the following format

// {
//     "accesstoken": "eyJhbGciOiJIU..iIsInR5...jb20iLCJpY...E1ODcyNjU2OTk...0.CKAkfwc7AL2p-5oy5h..2yt8ZfIkM..",
//     "email": "james3@mail.com",
//     "userType": "client"
// }

// Invalid username and password will show the following
// {
//     "message": "Username or password does not exists"
// }

// Defining methods for the booksController
module.exports = {
  findById: async function (req, res) {
    try {
      // console.log(req.body);
      const { email, password } = req.body;
      //1. check if user exists
      const result = await db.User.findOne({
        where: {
          email: email,
        },
      });
      //if user doesnot exist, throw the error
      // console.log(JSON.stringify(result));
      if (!result) throw new Error("Username or password does not exists");
      // 2. compare crypted password and see if it checks out. Send error if not
      const valid = await compare(password, result.password);
      if (!valid) throw new Error("Username or password does not exists");

      // 3. if correct, create refresh token and access token
      const accesstoken = createAccessToken(result.email);
      //   console.log("loginController : accesstoken : " + accesstoken);
      // 4. send access token
      sendAccessToken(
        req,
        result.id,
        result.type,
        result.name,
        res,
        accesstoken
      );
    } catch (err) {
      //   console.log("loginController : err : " + err);
      res.status(401).json({ message: `${err.message}` });
    }
  },
};
