import React, { Component } from "react";
import AuthService from "../services/auth.service";

import '../App.css';

import k8slogo from '../img/Kubernetes_logo_without_workmark.svg';


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()
    };
  }

//        <header className="jumbotron">
  render() {
    const { currentUser } = this.state;

    return (
      <div className="container">
        <header className="App-header">


        <a className="App-link" href="https://www.kubernetes.io/" target="_blank" rel="noopener noreferrer" >
         User {this.state.content} Profile Page
        </a>
        <p>
          <strong>Id:</strong>{"          "}
          {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong>{"         "}
          {currentUser.email}
        </p>
        <strong>Authorities:</strong> {"         "}
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul>
        <p>
          <strong>Token:</strong>{"        "}
          {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <img src={k8slogo} className="App-logo" alt="k8s-logo" />
        </header>
      </div>
    );
  }
}
