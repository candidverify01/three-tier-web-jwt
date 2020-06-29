import React, { Component } from "react";
import '../App.css';
import infologo from '../img/info.svg';

import UserService from "../services/user.service";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
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

//        <header className="jumbotron">
  render() {
    return (
      <div className="container">
        <header className="App-header">


        <a className="App-link" href="https://www.mysql.com/training/" target="_blank" rel="noopener noreferrer" >
          {this.state.content} Admin Page
        </a>
        <br/>

        <img src={infologo} className="App-logo" alt="info-logo" />


        </header>
      </div>
    );
  }
}
