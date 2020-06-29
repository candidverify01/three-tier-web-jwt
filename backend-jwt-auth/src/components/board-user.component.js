import React, { Component } from "react";
import mysqllogo from '../img/MySQL.svg';
import '../App.css';

import UserService from "../services/user.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="App-header">


        <a className="App-link" href="https://www.mysql.com/training/" target="_blank" rel="noopener noreferrer" >
          {this.state.content} User Page
        </a>
        <br/>

        <img src={mysqllogo} className="App-logo" alt="mysql-logo" />


        </header>
      </div>
    );
  }
}
