import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API/API";
import { useHistory } from "react-router-dom";
import UserContext from "../utils/context/UserContext";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "90%",
  },
});

function CompleteAssignedTask() {
  const { accessToken } = useContext(UserContext);
  let { id } = useParams();
  const [assignedTaskData, setAssignedTaskData] = useState([]);
  const [error, setError] = useState("");
  const [viewStatusChangeButton, setViewStatusChangeButton] = useState(false);
  const [taskState, setTaskState] = useState("");
  let history = useHistory();

  //get selected task details
  useEffect(() => {
    API.apiGetAssignedTaskById(id)
      .then((response) => {
        const taskData = response.data[0];
        setAssignedTaskData(taskData);
        if (taskData.clienttasks_status === "Assigned"){
          setViewStatusChangeButton(true);
          setTaskState("Start Task") ;
        }
        else if (taskData.clienttasks_status === "Started"){
            setViewStatusChangeButton(true);
            setTaskState("Complete Task") ;
        }
      })
      .catch((err) => {
        // console.log("Assigned Task not retrieved");
        setError(err.message);
      });
  }, []);

  // update task status
  async function updateAssignedTaskStatus(id) {
    let data = { status: "Assigned" };
    if(assignedTaskData.clienttasks_status === "Assigned"){
      data = { status: "Started" };
    }
    else{
      data = { status: "Completed" };
    }    
    // console.log("updateAssignedTaskStatus started"+ data);
    return await API.apiUpdateAssignedTaskStatus(id, data, accessToken)
      .then((response) => response.data)
      .catch((err) => {
        setError(err.message);
        // console.log("Update task status failed");
      });
  }


  const handleClick = async () => { 
      // console.log("handleClick started");
        await updateAssignedTaskStatus(id);       
        history.goBack();
  };


  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ marginTop: 100 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            {assignedTaskData.tasks_title}
          </Typography>
          <Typography variant="h4" component="h2">
            Description
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ marginTop: 10 }}
          >
            {assignedTaskData.tasks_description}
          </Typography>
          <Typography variant="h4" component="h2" style={{ marginTop: 20 }}>
            Due Date
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ marginTop: 10 }}
          >
            {assignedTaskData.tasks_completedBy}
          </Typography>
          <Typography variant="h4" component="h2" style={{ marginTop: 20 }}>
            Status
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ marginTop: 10 }}
          >
            {assignedTaskData.clienttasks_status}
          </Typography>
        </CardContent>
      </CardActionArea>
      {error ? <h4 style={{ color: "red" }}>{error}</h4> : null}
      <CardActions>
      { viewStatusChangeButton ? <Button
          size="small"
          color="primary"
          onClick={() => handleClick()}
          variant="contained"
          style={{ clear: "both" }}
        >
          {taskState}
        </Button> : null}
        <Button
          size="small"
          color="secondary"
          onClick={() => history.goBack()}
          variant="contained"
          style={{ clear: "both" }}
        >
          Cancle
        </Button>
      </CardActions>
    </Card>
  );
}

export default CompleteAssignedTask;
