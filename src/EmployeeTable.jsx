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
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Employee ID</th>
          <th scope="col">Age</th>
          <th scope="col">Email</th>
          <th scope="col">Phone number</th>
        </tr>
      </thead>
      <tbody>
        {tableData.length ? tableData.map((employee, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.empid}</td>
              <td>{employee.age}</td>
              <td>{employee.email}</td>
              <td>{employee.phonenumber}</td>
            </tr>
          )
        }) : null
    }
      </tbody>
    </table>
  );
}

export default EmpTable;
