import React, { Component } from "react";

import IssueCount from "./components/IssueCount";
import Issue from "./components/Issue";

import axios from "axios";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./App.css";

class App extends Component {
  state = {
    user: "facebook",
    repo: "react",
    issues: [],
    openedIssues: 0,
    closedIssues: 0
  };

  componentDidMount() {
    const { user, repo } = this.state;
    this.getRepositoryIssues(user, repo);
  }

  getRepositoryIssues = async (user, repositoryName) => {
    try {
      const { data } = await axios(
        `https://api.github.com/repos/${user}/${repositoryName}/issues`
      );

      const issues = data.map(issue => {
        return {
          id: issue.id,
          title: issue.title,
          comments: issue.comments,
          state: issue.state,
          number: issue.number
        };
      });

      const openedIssues = issues.filter(issue => issue.state === "open")
        .length;
      const closedIssues = issues.filter(issue => issue.state === "closed")
        .length;

      this.setState({
        issues,
        closedIssues,
        openedIssues
      });
    } catch (error) {
      console.log(error.message);
    }
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
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <Button variant="contained" color="primary" type="submit">
              Search Issues
            </Button>
          </div>
        </form>
        <div className="issueList">
          {this.state.issues.length ? (
            <IssueCount
              openedIssues={openedIssues}
              closedIssues={closedIssues}
            />
          ) : null}

          {issues.map(issue => (
            <div key={issue.id}>
              <Issue repo={repo} user={user} issue={issue} />
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default App;
