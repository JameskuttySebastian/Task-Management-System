import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API/API";
// import UserContext from "../utils/context/UserContext";
import { useHistory } from "react-router-dom";

function AssignTask() {
  let { id } = useParams();
  // const { accessToken } = useContext(UserContext);
  const [taskData, setTaskData] = useState([]);
  let history = useHistory();

  useEffect(() => {
    API.apiGetTaskById(id)
      .then(async (response) => {
        await setTaskData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const assignTaskToAll = (taskId) => {
    console.log(taskId);
  };

  const handleClick = (e) => {
    assignTaskToAll(e.target.value);
  };

  return (
    <div>
      <div>
        <h4>{taskData.title}</h4>
        <hr />
        <h6>Task Details</h6>
        <p>{taskData.description}</p>
        <br />
        <h6>Task Completion Date</h6>
        <p>{taskData.completedBy}</p>
        <br />
        <h6>Task Status</h6>
        <p>{taskData.status}</p>
        <br />
      </div>
      <div>
        <button value={id} onClick={handleClick}>
          Assign
        </button>
        <button onClick={() => history.goBack()}>Cancel</button>
      </div>
    </div>
  );
}

export default AssignTask;
