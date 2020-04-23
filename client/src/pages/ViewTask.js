import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import API from "../utils/API/API";
import { useHistory } from "react-router-dom";

export default function ViewTask() {
  const [taskData, setTaskData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const history = useHistory();

  useEffect(() => {
    API.apiGetTask()
      .then(async (response) => {
        await setTaskData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const assignSelectedTask = (e, rowData) => {
    history.push(`/assignTasks/${rowData.tasksid}`);
  };

  return (
    <div style={{ clear: "both", marginTop: 60 }}>
      <MaterialTable
        title="Tasks"
        columns={[
          {
            title: "No",
            field: "tasksid",
            type: "numeric",
            width: "10%",
          },
          { title: "Title", field: "taskstitle" },
          { title: "Details", field: "tasksdescription" },
          { title: "Completed by", field: "taskscompletedBy" },
          { title: "Status", field: "tasksstatus" },
          { title: "Created by", field: "usersname" },
        ]}
        data={taskData}
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
            icon: "save",
            tooltip: "Assign Task",
            onClick: (event, rowData) => assignSelectedTask(event, rowData),
            disabled: rowData.tasksstatus !== "Active",
          }),
        ]}
      />
    </div>
  );
}
