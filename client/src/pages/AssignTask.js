import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API/API";
import UserContext from "../utils/context/UserContext";
import { useHistory } from "react-router-dom";
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";

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

  return (
    <div>
      <Container maxWidth="sm">
        <div style={{ clear: "both", marginTop: 100 }}>
          <h2>{taskData.title}</h2>
          <hr />
          <h4>Task Details</h4>
          <p>{taskData.description}</p>
          <br />
          <h4>Task Completion Date</h4>
          <p>{taskData.completedBy}</p>
          <br />
          <h4>Task Status</h4>
          <p>{taskData.status}</p>
          <br />
        </div>
        <div>
          <Button
            value={id}
            onClick={handleClick}
            type="submit"
            variant="contained"
            color="primary"
            style={{ clear: "both", marginTop: 50 }}
          >
            Assign
          </Button>

          <Button
            onClick={() => history.goBack()}
            variant="contained"
            style={{ clear: "both", marginTop: 50 }}
          >
            Cancel
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default AssignTask;
