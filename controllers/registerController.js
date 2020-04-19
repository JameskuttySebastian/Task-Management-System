const db = require("../models");
const { hashSync } = require("bcryptjs");
const { isAuth } = require("../auth/isAuth");

// Defining methods for the registerController
// This expects following format
// {
//     "email":"james1@mail.com",
//     "password":"1",
//     "name":"James1",
//     "type":"client",
//     "status":"Active"
//     }
// The api response is in the following format
// {
//     "message": "User created"
// }
module.exports = {
  create: async function (req, res) {
    try {
      // checking the user is already logged in
      const userId = await isAuth(req);
      console.log("registerController : userId : " + userId);

      //1. check if user exists
      // This part is omitted because sequelize will do this part using primary key

      //
      if (userId !== null && userId !== undefined) {
        //2.  if user not exist, hash the password
        const { password } = req.body;
        const hashedPassword = hashSync(password, 10);
        console.log("registerController : hashedPassword : " + hashedPassword);
        //3. insert the user
        const result = await db.User.create({
          password: hashedPassword,
          ...req.body,
        });
        console.log("registerController : result : " + result);
        //   res.send(JSON.stringify(result))
        //   res.json(result);
        res.send({ message: "User created" });
      } else {
        throw new Error("Please login again");
      }
    } catch (err) {
      console.log("registerController : err : " + err);
    }
  },
};
