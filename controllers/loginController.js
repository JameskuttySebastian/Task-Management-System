const db = require("../models");
const { hashSync, compare } = require("bcryptjs");
const { createAccessToken, sendAccessToken } = require("../auth/Token");

// send access token in the following format

// {
//     "accesstoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJqYW1lczNAbWFpbC5jb20iLCJpYXQiOjE1ODcyNjU2OTksImV4cCI6MTU4NzM1MjA5OX0.CKAkfwc7AL2p-5oy5hZi5_Vi4Uzb2yt8ZfIkMFSd8p8",
//     "email": "james3@mail.com",
//     "userType": "client"
// }

// Defining methods for the booksController
module.exports = {
  findById: async function (req, res) {
    try {
      const { email, password } = req.body;
      //1. check if user exists
      const result = await db.User.findOne({
        where: {
          email: email,
        },
      });
      //   .then((dbModel) => console.log(JSON.stringify(dbModel)));
      //if user doesnot exist, throw the error
      //   console.log(JSON.stringify(result));
      if (!result) throw new Error("Username or password does not exists");
      // 2. compare crypted password and see if it checks out. Send error if not
      const valid = await compare(password, result.password);
      if (!valid) throw new Error("Username or password does not exists");

      // 3. if correct, create refresh token and access token
      const accesstoken = createAccessToken(result.email);
      console.log("loginController : accesstoken : " + accesstoken);
      // 4. send access token
      sendAccessToken(req, result.type, res, accesstoken);
    } catch (err) {
      console.log("loginController : err : " + err);
      res.send({
        error: `${err.message}`,
      });
    }
  },
};
