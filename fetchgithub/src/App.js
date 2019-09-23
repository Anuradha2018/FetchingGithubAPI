import React, { Component } from "react";

// import NavBar from "./components/NavBar";
import Issue from "./components/Issue";

import axios from "axios";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IssueCount from "./components/IssueCount";

class App extends Component {
  state = {
    user: "",
    repo: "",
    issues: [],
    openedIssues: 0,
    closedIssues: 0
  };

  componentDidMount() {
    // this.getRepositoryIssues("facebook", "react");
  }

  // getUser = () => {
  //   axios.get(`https://api.github.com/users`).then(res => {
  //     console.log("Response is", res.data);
  //     const user = res.data.map(item => {
  //       return item.login;
  //     });
  //     console.log("Response is", user);
  //     this.setState({
  //       users: user
  //     });
  //   });
  // };

  // getUserRepo = event => {
  //   event.preventDefault();
  //   const user = event.target.elements.username.value;
  //   // const repo = event.target.elements.repo.value;
  //   console.log(user);

  //   axios.get(`https://api.github.com/users/${user}/repos`).then(res => {
  //     console.log(res);
  //   });
  //   // const api_call = await fetch(
  //   //   "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}"
  //   // );
  //   // const data = await api_call.json();
  //   // console.log(data);
  // };
  // getIssue = event => {
  //   event.preventDefault();
  //   const param = event.target.elements.param.value;
  //   console.log(param);
  //   axios.get(`https://api.github.com/search/issues?q={param}`).then(res => {
  //     console.log(res);
  //   });
  // };

  getRepositoryIssues = async (user, repositoryName) => {
    const { data } = await axios(
      `https://api.github.com/repos/${user}/${repositoryName}/issues`
    );

    const issues = data.map(issue => {
      return {
        id: issue.id,
        title: issue.title,
        comments: issue.comments,
        state: issue.state
      };
    });

    const openedIssues = issues.filter(issue => issue.state === "open").length;
    const closedIssues = issues.filter(issue => issue.state === "closed")
      .length;

    this.setState({ issues, closedIssues, openedIssues });
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user, repo } = this.state;
    this.getRepositoryIssues(user, repo);
  };

  render() {
    const { issues, closedIssues, openedIssues, user, repo } = this.state;
    return (
      <Container maxWidth="md">
        <form onSubmit={this.handleSubmit}>
          <TextField
            value={user}
            onChange={this.handleInput}
            type="text"
            name="user"
            placeholder="enter github username"
            margin="dense"
            variant="outlined"
            label="Username"
          />
          <TextField
            value={repo}
            onChange={this.handleInput}
            type="text"
            name="repo"
            placeholder="enter repository name"
            margin="dense"
            variant="outlined"
            label="Repository"
          />
          <Button variant="contained" color="primary" type="submit">
            Search Issues
          </Button>
        </form>

        {this.state.issues.length ? (
          <IssueCount openedIssues={openedIssues} closedIssues={closedIssues} />
        ) : null}

        {issues.map(issue => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </Container>
    );
  }
}

export default App;
