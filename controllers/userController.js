const db = require("../models");
var Sequelize = require("sequelize");

// Defining methods for the userController
module.exports = {
  // findAll: function (req, res) {
  //   db.User.findAll({
  //     order: [["id", "ASC"]],
  //   })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },

  findAll: function (req, res) {
    db.sequelize
      .query(
        `SELECT 
        users.id  as usersid ,
        users.email as usersemail,
        users.name as usersname,
        users.type userstype,
        clients.name as clientsname
    FROM users left join 
            clients on  users.ClientId = clients.id
            order by  users.id`,
        { type: Sequelize.QueryTypes.SELECT }
        // {"usersid":9,
        // "usersemail":"james2@mail.com",
        // "usersname":"James2",
        // "userstype":"client",
        // "clientsname":"Westbournepark Primary School"}
      )
      .then((dbModel) => res.json(dbModel))
      .catch((err) => console.log(err));
  },
  //res.status(422).json(err)
  findById: function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  update: function (req, res) {
    db.User.update(req.body, { where: { id: req.params.id } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.User.destroy({ where: { id: req.params.id } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
