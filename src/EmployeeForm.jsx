import React from "react";

const initialstate = {
  name: "",
  username: "",
  id: "",
  email: "",
  phone: "",
};
class EmpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formdata: initialstate, validationdata: initialstate };
    this.handleFormData = this.handleFormData.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleFormData(e) {
    this.setState({
      formdata: { ...this.state.formdata, [e.target.name]: e.target.value },
    });
  }

  validateFormData = () => {
    let { name, username, id, email, phone } = this.state.formdata;
    let temperror = {
      name: "",
      username: "",
      id: "",
      email: "",
      phone: "",
    };

    if (name.length < 3) {
      temperror.name = "Please Enter first name more than 3 characters";
    }
    if (/[0-9!@#$%^&*(){}\[\]+=-]/g.test(name)) {
      temperror.name = "Please Enter first name without symbols/numbers";
    }
    if (username.length < 3) {
      temperror.username = "Please Enter last name more than 3 characters";
    }
    if (/[0-9!@#$%^&*(){}\[\]+=-]/g.test(username)) {
      temperror.username = "Please Enter last name without symbols/numbers";
    }
    if (id > 100000 || id === "") {
      temperror.id = "Please Enter valid employee ID";
    }
    if (!/[@]/g.test(email) || !/[.]/g.test(email) || email === "") {
      temperror.email = "Please Enter the proper email address";
    }
    if (
      phone.toString().length < 7 ||
      phone.toString().length > 10 ||
      /[a-zA-Z!@#$%^&*()_+=-{}\[\]]/.test(phone)
    ) {
      temperror.phone = "Please Enter the correct phone number";
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
    let { name, username, id, email, phone } = this.state.formdata;
    let {
      name: fnameerror,
      username: lnameerror,
      id: emperror,
      email: emailerror,
      phone: pherror,
    } = this.state.validationdata;

    return (
      <div className="row">
        <form className="col-6" onSubmit={this.submitForm}>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              type="number"
              className="form-control"
              value={id}
              name="id"
              aria-describedby="number"
              placeholder="Enter User ID"
              onChange={this.handleFormData}
            />
            <small className="form-text text-danger">{emperror}</small>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              className="form-control"
              name="name"
              aria-describedby="text"
              placeholder="Enter first name"
              onChange={this.handleFormData}
            />
            <small className="form-text text-danger">{fnameerror}</small>
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              className="form-control"
              value={username}
              name="username"
              aria-describedby="text"
              placeholder="Enter last name"
              onChange={this.handleFormData}
            />
            <small className="form-text text-danger">{lnameerror}</small>
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
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              value={phone}
              name="phone"
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
