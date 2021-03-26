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
    this.state = { formdata: initialstate, validationdata: initialstate };

    this.handleFormData = this.handleFormData.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleFormData(e) {
    console.log(e.target.name, e.target.value);
    this.setState({
      formdata: { ...this.state.formdata, [e.target.name]: e.target.value },
    });
  }

  validateFormData = () => {
    let {
      firstname,
      lastname,
      empid,
      email,
      age,
      phonenumber,
    } = this.state.formdata;
    let temperror = {
      firstname: "",
      lastname: "",
      empid: "",
      email: "",
      age: "",
      phonenumber: "",
    };

    if (firstname.length < 3) {
      temperror.firstname ="Please Enter first name more than 3 characters"
    }
    if (/[0-9!@#$%^&*(){}\[\]+=-]/g.test(firstname)) {
      temperror.firstname ="Please Enter first name without symbols/numbers";
    }
    if (lastname.length < 3) {
      temperror.lastname ="Please Enter last name more than 3 characters"
    }
    if (/[0-9!@#$%^&*(){}\[\]+=-]/g.test(lastname)) {
      temperror.lastname ="Please Enter last name without symbols/numbers";
    }
    if (empid > 100000 || empid === "") {
      temperror.empid = "Please Enter valid employee ID";
    }
    if (age >= 50 || age <= 22 || age === "") {
      temperror.age = "Please Enter the correct age";
    }
    if (!/[@]/g.test(email) || !/[.]/g.test(email) || email === "") {
      temperror.email = "Please Enter the proper email address";
    }
    if (
      phonenumber.toString().length < 7 ||
      phonenumber.toString().length > 10 ||
      /[a-zA-Z!@#$%^&*()_+=-{}\[\]]/.test(phonenumber)
    ) {
      temperror.phonenumber = "Please Enter the correct phone number";
    }
    return temperror;
  };
  submitForm(e) {
    e.preventDefault();
    console.log("form data", this.state.formdata);
    let validation_status = this.validateFormData();
    let errorStatus = Object.values(validation_status).find(
      (errorvalue) => errorvalue !== ""
    );
    console.log("validation status", errorStatus);
    if (errorStatus) {
      this.setState({ validationdata: validation_status });
    } else {
      this.props.updateEmpTable(this.state.formdata);
      this.setState({ formdata: initialstate, validationdata: initialstate });
    }
  }

  render() {
    let {
      firstname,
      lastname,
      empid,
      email,
      age,
      phonenumber,
    } = this.state.formdata;
    let {
      firstname: fnameerror,
      lastname: lnameerror,
      empid: emperror,
      email: emailerror,
      age: ageerror,
      phonenumber: pherror,
    } = this.state.validationdata;

    return (
      <div className="row">
        <form className="col-4" onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              value={firstname}
              className="form-control"
              name="firstname"
              aria-describedby="text"
              placeholder="Enter first name"
              onChange={this.handleFormData}
            />
            <small className="form-text text-danger">{fnameerror}</small>
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lastname}
              name="lastname"
              aria-describedby="text"
              placeholder="Enter last name"
              onChange={this.handleFormData}
            />
            <small className="form-text text-danger">{lnameerror}</small>
          </div>
          <div className="form-group">
            <label htmlFor="empid">Employee ID</label>
            <input
              type="number"
              className="form-control"
              value={empid}
              name="empid"
              aria-describedby="number"
              placeholder="Enter EmpID"
              onChange={this.handleFormData}
            />
            <small className="form-text text-danger">{emperror}</small>
          </div>
          <div className="form-group">
            <label htmlFor="age">age</label>
            <input
              type="number"
              className="form-control"
              value={age}
              name="age"
              aria-describedby="number"
              placeholder="Enter age"
              onChange={this.handleFormData}
            />
            <small className="form-text text-danger">{ageerror}</small>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              name="email"
              aria-describedby="text"
              placeholder="Enter email"
              onChange={this.handleFormData}
            />
            <small className="form-text text-danger">{emailerror}</small>
          </div>
          <div className="form-group">
            <label htmlFor="phonenumber">Phone</label>
            <input
              type="tel"
              className="form-control"
              value={phonenumber}
              name="phonenumber"
              aria-describedby="tel"
              placeholder="Enter phone number"
              onChange={this.handleFormData}
            />
            <small className="form-text text-danger">{pherror}</small>
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
