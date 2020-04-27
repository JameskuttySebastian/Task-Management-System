import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import API from "../utils/API/API";
import { useHistory } from "react-router-dom";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

export default function ViewAssignedTask() {
  const [assignedTaskData, setAssignedTaskData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const history = useHistory();

  useEffect(() => {
    API.apiGetAssignedTask()
      .then((response) => {
        setAssignedTaskData(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const viewAssignedTaskDetail = (e, rowData) => {
    history.push(`/viewAssignedTaskDetail/${rowData.clienttasks_id}`);
  };

  return (
    <div style={{ clear: "both", marginTop: 100 }}>
      <MaterialTable
        title="All Assigned Tasks records"
        style={{textTransform: "uppercase"}}

        columns={[
          {
            title: "ID No",
            field: "clienttasks_id",
            type: "numeric",
            width: 20,
            textAlign: "center",
          },
          { title: "Client", field: "clients_name" },
          { title: "Title", field: "tasks_title" },
          { width: 500,title: "Details", field: "tasks_description" },
          { title: "Completed by", field: "tasks_completedBy" },
          { title: "Status", field: "clienttasks_status" },
        ]}
        data={assignedTaskData}
        onRowClick={async (evt, selectedRows) =>
          await setSelectedRow(selectedRows)
        }
        options={{
          actionsColumnIndex: -1,
          sorting: true,
          headerStyle: {
            backgroundColor: "#01579b",
            color: "#FFF",
            fontWeight: "bold"
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
            tooltip: "View Details",
            onClick: (event, rowData) => viewAssignedTaskDetail(event, rowData),
          }),
        ]}
      />
    </div>
  );
}
