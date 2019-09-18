import React, { Component } from "react";

import NavBar from "./components/NavBar";
import Issue from "./components/Issue";
import UserRepo from "./components/UserRepo";

import axios from "axios";
import Container from "@material-ui/core/Container";

class App extends Component {
  state = {
    users: null
  };
  getUser = () => {
    axios.get(`https://api.github.com/users`).then(res => {
      console.log("Response is", res.data);
      const user = res.data.map(item => {
        return item.login;
      });
      console.log("Response is", user);
      this.setState({
        users: user
      });
    });
  };
  getUserRepo = event => {
    event.preventDefault();
    const user = event.target.elements.username.value;
    // const repo = event.target.elements.repo.value;
    console.log(user);

    axios.get(`https://api.github.com/users/${user}/repos`).then(res => {
      console.log(res);
    });
    // const api_call = await fetch(
    //   "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}"
    // );
    // const data = await api_call.json();
    // console.log(data);
  };
  getIssue = event => {
    event.preventDefault();
    const param = event.target.elements.param.value;
    console.log(param);
    axios.get(`https://api.github.com/search/issues?q={param}`).then(res => {
      console.log(res);
    });
  };
  render() {
    return (
      <Container maxWidth="md">
        <NavBar getUser={this.getUser} />
        <UserRepo getUser={this.getUserRepo} />
        <Issue getIssue={this.getIssue} />
      </Container>
    );
  }
}

export default App;
