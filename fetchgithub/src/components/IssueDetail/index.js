import React, { Component } from "react";
import axios from "axios";
import querystring from "query-string";
import "./style.css";
import IssueComments from "../IssueComments/index";

class IssueDetail extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      comments: []
    };
  }
  componentDidMount() {
    const { match } = this.props;
    const { number } = match.params;
    const { repo, user } = querystring.parse(this.props.location.search);
    this.getIssueDetail(user, repo, number);
    this.getIssueComment(user, repo, number);
  }

  getIssueDetail = async (user, repositoryName, issueNumber) => {
    try {
      const { data } = await axios(
        `https://api.github.com/repos/${user}/${repositoryName}/issues/${issueNumber}`
      );
      this.setState({
        title: data.title,
        user: user,
        repo: repositoryName
      });
      // console.log("Data", data);
      console.log(this.state, data);
    } catch (error) {
      console.log(error.message);
    }
  };

  getIssueComment = async (user, repositoryName, issueNumber) => {
    try {
      const { data } = await axios(
        `https://api.github.com/repos/${user}/${repositoryName}/issues/${issueNumber}/comments`
      );
      this.setState({ comments: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <div className="issue-detail">
        <div className="title">
          <h1 className="header">{this.state.title}</h1>
        </div>
        <IssueComments comments={this.state.comments} />
      </div>
    );
  }
}

export default IssueDetail;
