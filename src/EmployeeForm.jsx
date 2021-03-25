import React from "react";

const initialstate = {
    firstname: "",
    lastname: "",
    empid: "",
    age: "",
    email: "",
    phonenumber: "",
  };
class EmpForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = initialstate;
      this.handleFormData = this.handleFormData.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }
  
    handleFormData(e) {
      console.log(e.target.name, e.target.value);
      this.setState({ [e.target.name]: e.target.value });
    }
  
    validateFormData = () => {
      return 0;
      if (
        this.state.firstname.length < 3 ||
        /[0-9!@#$%^&*(){}\[\]]+=-/g.test(this.state.firstname)
      ) {
        return "Please Enter first name more than 3 characters without symbols/numbers";
      }
      if (
        this.state.lastname.length < 3 ||
        /[0-9!@#$%^&*(){}\[\]]/g.test(this.state.lastname)
      ) {
        return "Please Enter last name more than 3 characters without symbols/numbers";
      }
      if (this.state.empid > 100000 || this.state.empid === "") {
        return "Please Enter valid employee ID";
      }
      if (this.state.age >= 50 || this.state.age <= 22 || this.state.age === "") {
        return "Please Enter the correct age";
      }
      if (
        !/[@]/g.test(this.state.email) ||
        !/[.]/g.test(this.state.email) ||
        this.state.email === ""
      ) {
        return "Please Enter the proper email address";
      }
      if (
        this.state.phonenumber.toString().length < 7 ||
        this.state.phonenumber.toString().length > 10 ||
        /[a-zA-Z!@#$%^&*()_+=-{}\[\]]/.test(this.state.phonenumber)
      ) {
        return "Please Enter the correct phone number";
      }
      return 0;
    };
    submitForm(e) {
      e.preventDefault();
      console.log("form data", this.state);
      let validation_status = this.validateFormData();
      if (validation_status) {
        alert(validation_status);
      } else {
        this.props.updateEmpTable(this.state);
        this.setState(initialstate);
      }
    }
  
    render() {
      return (
          <div className="row">
            <form className="col-4" onSubmit={this.submitForm}>
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  value={this.state.firstname}
                  className="form-control"
                  name="firstname"
                  aria-describedby="text"
                  placeholder="Enter first name"
                  onChange={this.handleFormData}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.lastname}
                  name="lastname"
                  aria-describedby="text"
                  placeholder="Enter last name"
                  onChange={this.handleFormData}
                />
              </div>
              <div className="form-group">
                <label htmlFor="empid">Employee ID</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.empid}
                  name="empid"
                  aria-describedby="number"
                  placeholder="Enter EmpID"
                  onChange={this.handleFormData}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">age</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.age}
                  name="age"
                  aria-describedby="number"
                  placeholder="Enter age"
                  onChange={this.handleFormData}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.email}
                  name="email"
                  aria-describedby="text"
                  placeholder="Enter email"
                  onChange={this.handleFormData}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phonenumber">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  value={this.state.phonenumber}
                  name="phonenumber"
                  aria-describedby="tel"
                  placeholder="Enter phone number"
                  onChange={this.handleFormData}
                />
              </div>
              <button onClick={this.submitForm} className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
      );
    }
  }
  
  export default EmpForm;