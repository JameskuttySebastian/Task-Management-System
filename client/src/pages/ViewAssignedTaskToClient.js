import React, { useEffect, useState, useContext } from "react";
import MaterialTable from "material-table";
import API from "../utils/API/API";
import { useHistory } from "react-router-dom";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import UserContext from "../utils/context/UserContext";

export default function ViewAssignedTaskToClient() {

  const { clientId } = useContext(UserContext);
  const [clientAssignedTaskData, setClientAssignedTaskData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect Started");
    API.apiGetAssignedTaskToClient(clientId)
      .then((response) => {
        setClientAssignedTaskData(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log("Tasks not found");
      });
  }, []);

  const completeAssignedTask = (e, rowData) => {
    history.push(`/completeAssignedTask/${rowData.clienttasks_id}`);
  };

  return (
    <div style={{ clear: "both", marginTop: 60 }}>
      <MaterialTable
        title="Assigned Tasks"
        columns={[
          {
            title: "ID No",
            field: "clienttasks_id",
            type: "numeric",
            width: "10%",
            textAlign: "center",
          },
          { title: "Client", field: "clients_name" },
          { title: "Title", field: "tasks_title" },
          { title: "Completed by", field: "tasks_completedBy" },
          { title: "Status", field: "clienttasks_status" },
        ]}
        data={clientAssignedTaskData}
        onRowClick={async (evt, selectedRows) =>
          await setSelectedRow(selectedRows)
        }
        options={{
          actionsColumnIndex: -1,
          sorting: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
          },
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow && selectedRow.tableData.id === rowData.tableData.id
                ? "#EEE"
                : "#FFF",
          }),
        }}
        actions={[
          (rowData) => ({
            icon: AssignmentOutlinedIcon,
            tooltip: "Complete Task",
            onClick: (event, rowData) => completeAssignedTask(event, rowData),
          }),
        ]}
      />
    </div>
  );
}
