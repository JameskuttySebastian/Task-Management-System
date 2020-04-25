import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API/API";
import UserContext from "../utils/context/UserContext";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

function AssignTask() {
  let { id } = useParams();
  const { accessToken } = useContext(UserContext);
  const [taskData, setTaskData] = useState([]);
  let history = useHistory();

  //get selected task details
  useEffect(() => {
    API.apiGetTaskById(id)
      .then((response) => {
        setTaskData(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("Task not retrieved");
      });
  }, []);

  // assign task to all clients
  async function assignTaskToAll(clientTaskList) {
    return await API.apiAssignTask(clientTaskList, accessToken)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
        console.log("Tasks not assigned");
      });
  }

  // get all from client list
  function getAllClients() {
    return API.apiGetClient()
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
        console.log("Clients not received");
      });
  }
  // genetate client task list for db population
  function createClientTaskList(clientList, id) {
    return clientList.map((client) => ({
      clientId: parseInt(client.id),
      taskId: parseInt(id),
      status: "Assigned",
    }));
  }

  // update task status
  async function updateTaskStatus(id) {
    let data = { status: "Assigned" };
    return await API.apiUpdateTaskStatus(id, data, accessToken)
      .then((response) => response.data)
      .catch((err) => {
        console.log(err);
        console.log("Update task status failed");
      });
  }

  const handleClick = async () => {
    const clientList = await getAllClients();
    const clientTaskList = await createClientTaskList(clientList, id);
    await assignTaskToAll(clientTaskList);
    // const updateTaskStatusMsg = await updateTaskStatus(id);
    await updateTaskStatus(id);
    // console.log(updateTaskStatusMsg);
    history.goBack();
  };

  const classes = useStyles();

  return (
    
    <Card className={classes.root} style={{ marginTop: 100}}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h3" component="h2">
          {taskData.title}
        </Typography>
        <Typography variant="h4" component="h2">
        Description
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p"style={{ marginTop: 10}}>
        {taskData.description}
        </Typography>
        <Typography variant="h4" component="h2" style={{ marginTop: 20}}>
        Due Date
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: 10}}>
        {taskData.completedBy}
        </Typography>
        <Typography variant="h4" component="h2" style={{ marginTop: 20}}>
        Status
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{ marginTop: 10}}>
        {taskData.status}
        </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary"
       value={id}
       onClick={handleClick}
       type="submit"
       variant="contained"
       style={{ clear: "both" }}
      >
        Assign
      </Button>
      <Button size="small" color="primary"
       onClick={() => history.goBack()}
       variant="contained"
       style={{ clear: "both"}}
      >
        Cancle
      </Button>
    </CardActions>
    
  </Card>


  );
}

export default AssignTask;
