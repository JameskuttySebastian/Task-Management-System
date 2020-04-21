const db = require("../models");
const { isAuth } = require("../auth/isAuth");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Client.findAll({
      order: [["id", "ASC"]],
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Client.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: async function (req, res) {
    console.log(req.body);
    try {
      // checking the user is already logged in
      const userId = await isAuth(req, res);
      console.log("clientController : userId : " + userId);

      if (userId !== null && userId !== undefined) {
        const result = await db.Client.create(req.body).then((result) => {
          // console.log(result);
        });
        console.log("registerController : result : " + result);
        //   res.send(JSON.stringify(result))
        //   res.json(result);
        // res.send({ message: "User created" });
        res.status(200).json({ message: "Client created" });
      } else {
        throw new Error("Please login again");
      }
    } catch (err) {
      console.log("Auth error : " + err.message);
      res.status(401).json({ message: err.message });
    }
  },

  update: function (req, res) {
    db.Client.update(req.body, { where: { id: req.params.id } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Client.destroy({ where: { id: req.params.id } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
