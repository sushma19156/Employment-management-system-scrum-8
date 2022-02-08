import logo from "./logo.svg";
import "./App.css";
import TableData from "./comp/TableData";
import Login from "./comp/Login";
// import Add from './comp/Add';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddDetails from "./comp/AddDetails";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useState } from "react";
import RegistrationForm from "./comp/RegistrationForm";

function App() {
  const initialstate = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [data, setData] = useState(initialstate);
  const [errors, setErrors] = useState({});

  return (
    <Router>
      <div className="App bg-primary">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark m-2">
          <a className="navbar-brand text-white p-1 m-1" href="#">
            EMS
          </a>
          <a className="navbar-brand text-white p-1 m-1" href="">
            EMS
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/registeration">Register</Link>
              <Link to="/login">Login</Link>
              <Link to="/tabledata">EMS Data</Link>
              <Link to="/adddata">Add Employee</Link>

            </div>
          </div>
        </nav>

        <Route path="/registeration" component={RegistrationForm} />
        <Route path="/login" component={Login} />
        <Route path="/tabledata" component={TableData}/>
        <Route path="/adddata" component={AddDetails}/>

      </div>
    </Router>
  );
}

export default App;
