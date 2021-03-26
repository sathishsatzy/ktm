import React, { useState, useEffect } from "react";
import EmpForm from "./EmployeeForm";
import Card from "./Card";
import "./user.css";

function User() {
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "get",
    })
      .then((response) => response.json())
      .then((resp) => setuserdata(resp));
  }, []);

  const updateEmpTable = (tData) => {
    console.log("table data from form ", tData);
    let temp = [...userdata];
    temp.push(tData);
    setuserdata(temp);
  };

  return (
    <div className="container-fluid">
      <EmpForm updateEmpTable={updateEmpTable} />
      <div className="row usercardbox">
        {userdata.map((user_data, index) => {
          return <Card key={index} userData={user_data} />;
        })}
      </div>
    </div>
  );
}

export default User;
