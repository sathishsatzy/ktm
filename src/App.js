import "./App.css";
import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import User from "./User";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabledata: [] };
  }

  updateEmpTable = (tData) => {
    console.log("table data from form ", tData);
    this.setState({ tabledata: [...this.state.tabledata, tData] });
  };

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <a href="http://localhost:3000/contact" target={"_blank"}>Visit W3Schools.com!</a>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/contact">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Route>
          <Route path="/">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
              nisl condimentum id venenatis a condimentum vitae sapien
              pellentesque. Suspendisse faucibus interdum posuere lorem ipsum
              dolor sit amet consectetur. Est ante in nibh mauris cursus mattis.
              At tempor commodo ullamcorper a lacus. Nulla facilisi morbi tempus
              iaculis. Quis hendrerit dolor magna eget est. Interdum velit
              euismod in pellentesque massa placerat. Amet nisl suscipit
              adipiscing bibendum est ultricies integer quis auctor. Arcu ac
              tortor dignissim convallis aenean et tortor. Feugiat nisl pretium
              fusce id velit ut. Nisl suscipit adipiscing bibendum est ultricies
              integer. Eu mi bibendum neque egestas congue quisque egestas diam
              in. Duis at consectetur lorem donec. Integer eget aliquet nibh
              praesent tristique magna sit amet purus. Fringilla ut morbi
              tincidunt augue interdum velit euismod in pellentesque. Massa
              ultricies mi quis hendrerit dolor magna eget. Gravida neque
              convallis a cras. Amet risus nullam eget felis eget. Etiam non
              quam lacus suspendisse faucibus. Pretium vulputate sapien nec
              sagittis aliquam malesuada. Platea dictumst quisque sagittis purus
              sit. Mi in nulla posuere sollicitudin.
            </p>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
