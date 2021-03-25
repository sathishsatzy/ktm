import "./App.css";
import React from "react";
import EmpTable from "./EmployeeTable";
import EmpForm from "./EmployeeForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tabledata : []};
  }

  updateEmpTable=(tData)=>{
    console.log("table data from form ",tData)
    this.setState({tabledata:[...this.state.tabledata, tData]});
  }

  render() {
    return (
      <div className="container-fluid">
        <EmpTable TableData = {this.state.tabledata}/>
        <EmpForm updateEmpTable = {this.updateEmpTable}/>
      </div>
    );
  }
}

export default App;
