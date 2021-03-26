import React, { useState, useEffect } from "react";

function EmpTable(props) {
  const [tableData, settableData] = useState([]);

  useEffect(() => {
      if(JSON.stringify(props.TableData) !== JSON.stringify(tableData)){
        settableData(props.TableData);

      }
    
  }, [props.TableData]);

  return (
    <table className="table table-bordered">
      <thead className="table-primary">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">User Name</th>
          <th scope="col">User ID</th>
          <th scope="col">Email</th>
          <th scope="col">Phone number</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length ? tableData.map((employee, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.name}</td>
              <td>{employee.username}</td>
              <td>{employee.id}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
            </tr>
          )
        }) : null
    }
      </tbody>
    </table>
  );
}

export default EmpTable;
