import React, { Component } from "react";
import '../App.css';
import homelogo from '../img/home.svg';

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

// <header className="jumbotron">
// <h3> {this.state.content} Home Page </h3>
  render() {
    return (
      <div className="container">
        <header className="App-header">

        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
            {this.state.content} Home Page 

        </a>

        <br/>

        <img src={homelogo} className="App-logo" alt="home-logo" />

        </header>
      </div>
    );
  }
}
