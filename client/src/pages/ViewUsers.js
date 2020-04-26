import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import API from "../utils/API/API";


export default function ViewUsers() {
  const [userData, setUserData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    API.apiGetUser()
      .then(async (response) => {
        await setUserData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // {"usersid":9,
  // "usersemail":"james2@mail.com",
  // "usersname":"James2",
  // "userstype":"client",
  // "clientsname":"Westbournepark Primary School"}

  const customColumnStyle = { maxWidth: "10%", backgroundColor: "green" };

  return (

    <div style={{ clear: "both", marginTop: 100 }}>
      <MaterialTable
        
        title="Users"
        columns={[
          {
            title: "No",
            field: "usersid",
            type: "numeric",
          },
          { title: "Name", field: "usersname" },
          { title: "Email", field: "usersemail" },
          { title: "User Type", field: "userstype" },
          { title: "Client", field: "clientsname" },
        ]}
        data={userData}
        onRowClick={async (evt, selectedRows) =>
          await setSelectedRow(selectedRows)
        }
        options={{
          sorting: true,
          align: 'center',
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
      />
    </div>
  );
}