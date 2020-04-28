const db = require("../models");
var Sequelize = require("sequelize");
const { isAuth } = require("../auth/isAuth");

// Defining methods for the booksController
module.exports = {
  // findAll: function (req, res) {
  //   db.Task.findAll({
  //     order: [["id", "ASC"]],
  //   })
  //     .then((dbModel) => res.json(dbModel))
  //     .catch((err) => res.status(422).json(err));
  // },

  findAll: function (req, res) {
    db.sequelize
      .query(
        `SELECT 
        Tasks.id as tasksid,
        Tasks.title as taskstitle,
        Tasks.description as tasksdescription,
        Tasks.completedBy as taskscompletedBy,
        Tasks.status as tasksstatus,
        Tasks.createdAt as taskscreatedAt,
        Users.name as usersname
      FROM Tasks left join 
        Users on Tasks.UserId = Users.id
        order by  Tasks.id`,
        { type: Sequelize.QueryTypes.SELECT }
      )
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => {
        // console.log(err);
        res.status(402).json({ message: "Task list info not found" });
      });
  },

  findById: function (req, res) {
    db.Task.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => {
        // console.log(err);
        res.status(402).json({ message: "Task info not found" });
      });
  },

  create: async function (req, res) {
    // console.log(req.body);
    try {
      // checking the user is already logged in
      const userId = await isAuth(req, res);
      // console.log("taskController : userId : " + userId);

      if (userId !== null && userId !== undefined) {
        const result = await db.Task.create(req.body).then((result) => {
          // console.log(result);
        });
        // console.log("taskController : result : " + result);
        //   res.send(JSON.stringify(result))
        //   res.json(result);
        // res.send({ message: "User created" });
        res.status(200).json({ message: "Task created" });
      } else {
        throw new Error("Please login again");
      }
    } catch (err) {
      // console.log("Auth error : " + err.message);
      res.status(401).json({ message: err.message });
    }
  },

  update: function (req, res) {
    db.Task.update(req.body, { where: { id: req.params.id } })
      .then((dbModel) => res.status(200).json({ message: "Task updated" }))
      .catch((err) => {
        // console.log(err);
        res.status(422).json({ message: "Task update failed" });
      });
  },

  remove: function (req, res) {
    db.Task.destroy({ where: { id: req.params.id } })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
