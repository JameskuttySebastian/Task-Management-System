import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import API from "../utils/API/API";

export default function ViewClient() {
  const [clientData, setClientData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    API.apiGetClient()
      .then(async (response) => {
        await setClientData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ clear: "both", marginTop: 100 }}>
      <MaterialTable
        
        title="CLIENTS INFORMATION RECORDS" 
        style={{textTransform: "uppercase"}}

        columns={[
          {
            width: 20,
            title: "No",
            field: "id",
            type: "numeric",
          },
          { title: "Name", field: "name" },

          {
            title: "Address",
            field: "address",
          },
        ]}
        data={clientData}
        onRowClick={async (evt, selectedRows) =>
          await setSelectedRow(selectedRows)
        }
        options={{
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
      />
    </div>
  );
}
