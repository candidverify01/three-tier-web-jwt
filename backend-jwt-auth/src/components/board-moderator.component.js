import React, { Component } from "react";
import nodejslogo from '../img/Node.js_logo.svg';
import '../App.css';

import UserService from "../services/user.service";

export default class BoardModerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getModeratorBoard().then(
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
          {this.state.content} Moderator Page
        </a>
        <br/>

        <img src={nodejslogo} className="App-logo" alt="nodejs-logo" />


        </header>
      </div>
    );
  }
}
