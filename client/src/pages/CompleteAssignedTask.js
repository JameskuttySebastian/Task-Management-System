import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API/API";
import { useHistory } from "react-router-dom";
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
  let { id } = useParams();
  const [assignedTaskDaskData, setAssignedTaskDaskData] = useState([]);
  const [error, setError] = useState("");
  let history = useHistory();

  //get selected task details
  useEffect(() => {
    API.apiGetAssignedTaskById(id)
      .then((response) => {
        setAssignedTaskDaskData(response.data[0]);
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Assigned Task not retrieved");
        setError(err.message);
      });
  }, []);

  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ marginTop: 100 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2">
            {assignedTaskDaskData.tasks_title}
          </Typography>
          <Typography variant="h4" component="h2">
            Description
          </Typography>
          <Typography
            variant="body2"
            // color="textSecondary"
            component="p"
            style={{ marginTop: 10 }}
          >
            {assignedTaskDaskData.tasks_description}
          </Typography>
          <Typography variant="h4" component="h2" style={{ marginTop: 20 }}>
            Due Date
          </Typography>
          <Typography
            variant="body2"
            // color="textSecondary"
            component="p"
            style={{ marginTop: 10 }}
          >
            {assignedTaskDaskData.tasks_completedBy}
          </Typography>
          <Typography variant="h4" component="h2" style={{ marginTop: 20 }}>
            Status
          </Typography>
          <Typography
            variant="body2"
            // color="textSecondary"
            component="p"
            style={{ marginTop: 10 }}
          >
            {assignedTaskDaskData.clienttasks_status}
          </Typography>
        </CardContent>
      </CardActionArea>
      {error ? <h4 style={{ color: "red" }}>{error}</h4> : null}
      <CardActions>
        <Button
          size="small"
          color="primary"
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
