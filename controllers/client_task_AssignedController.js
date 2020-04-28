const db = require("../models");
var Sequelize = require("sequelize");
const { isAuth } = require("../auth/isAuth");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    const clientId = req.params.clientId;
    db.sequelize
      .query(
        `select 
        ClientTasks.id as clienttasks_id, 
        ClientTasks.status as clienttasks_status,
        Clients.id AS clients_id, 
        Clients.name AS clients_name, 
        Clients.address AS clients_address,
        Tasks.id AS tasks_id, 
        Tasks.title AS tasks_title, 
        Tasks.description AS tasks_description,
        Tasks.status AS tasks_status, 
        Tasks.UserId AS tasks_UserId , 
        Tasks.completedBy AS tasks_completedBy
                 from ClientTasks  inner join 
                 Clients on ClientTasks.clientId = Clients.id 
                 inner join Tasks on ClientTasks.taskId = Tasks.id 
                 WHERE Clients.id = :ClientId
                 order by ClientTasks.id `,
        { 
          replacements: { ClientId: clientId },
          type: Sequelize.QueryTypes.SELECT 
      }
      )
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    const id = req.params.id;
    db.sequelize
      .query(
        `select 
        ClientTasks.id as clienttasks_id, 
        ClientTasks.status as clienttasks_status,
        Clients.id AS clients_id, 
        Clients.name AS clients_name, 
        Clients.address AS clients_address,
        Tasks.id AS tasks_id,         
        Tasks.title AS tasks_title, 
        Tasks.description AS tasks_description,
        Tasks.status AS tasks_status, 
        Tasks.UserId AS tasks_UserId , 
        Tasks.completedBy AS tasks_completedBy
                 from ClientTasks  inner join 
                 Clients on ClientTasks.clientId = Clients.id 
                 inner join Tasks on ClientTasks.taskId = Tasks.id 
                 WHERE ClientTasks.id = :ClientTasksId`,
        {
          replacements: { ClientTasksId: id },
          type: Sequelize.QueryTypes.SELECT,
        }
      )
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  create: async function (req, res) {
    console.log(req.body);
    try {
      // checking the user is already logged in
      const userId = await isAuth(req, res);
      console.log("client_taskController : userId : " + userId);

      if (userId !== null && userId !== undefined) {
        await db.ClientTask.bulkCreate(req.body).then((result) => {
          res.status(200).json({ message: "ClientTasks created" });
        });
        // console.log("client_taskController : result : " + result);
        //   res.send(JSON.stringify(result))
        //   res.json(result);
        // res.send({ message: "User created" });
      } else {
        throw new Error("Please login again");
      }
    } catch (err) {
      console.log("Auth error : " + err.message);
      res.status(401).json({ message: err.message });
    }
  },

  update: function (req, res) {
    db.ClientTask.update(req.body, { where: { id: req.params.id } })
      .then((dbModel) =>
        res.status(200).json({ message: "ClientTasks updated" })
      )
      .catch((err) => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.ClientTask.destroy({ where: { id: req.params.id } })
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
