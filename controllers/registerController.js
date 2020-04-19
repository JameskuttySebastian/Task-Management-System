const db = require("../models");
const { hashSync } = require("bcryptjs");

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
      const { password } = req.body;
      //1. check if user exists
      // This part is omitted because sequelize will do this part using primary key

      //2.  if user not exist, hash the password
      const hashedPassword = hashSync(password, 10);
      console.log(hashedPassword);
      //3. insert the user
      const result = await db.User.create({
        password: hashedPassword,
        ...req.body,
      });
      console.log(result);
      //   res.send(JSON.stringify(result))
      //   res.json(result);
      res.send({ message: "User created" });
    } catch (err) {
      console.log(err);
    }
  },
};
