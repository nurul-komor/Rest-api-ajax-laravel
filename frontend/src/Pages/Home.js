import React, { Component } from "react";
import Table from "../Components/Table";
import axios from "axios";
import { NavLink } from "react-router-dom";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
  }
  componentDidMount = () => {
    let users;
    axios
      .get("http://127.0.0.1:8000/api/users")
      .then((resolve) => {
        users = resolve.data.data;
        this.setState({ users });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container my-3">
        <header className="row">
          <div className="col-md-9">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search user..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>
          <div className="col-md-3">
            <NavLink className="btn btn-primary m-2" to="/create-user">
              Create User
            </NavLink>
            <a className="btn btn-warning " href="/user/trashes">
              Trashes
            </a>
          </div>
        </header>
        {this.state.users != null ? <Table users={this.state.users} /> : ""}
      </div>
    );
  }
}
