import React, { Component } from "react";
import axios from "axios";
import querystring from "query-string";
import "./style.css";
import IssueComment from "../IssueComment/index";
import IssueCommentForm from "../IssueCommentForm";

class IssueDetail extends Component {
  constructor() {
    super();
    this.state = {
      title: null,
      comments: [],
      issueNumber: null
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
        repo: repositoryName,
        issueNumber
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
    const { title, issueNumber } = this.state;
    return (
      <div className="issue-detail">
        <div className="title">
          <h1 className="header">
            {title} <span className="issue-id">{`#${issueNumber}`}</span>
          </h1>
        </div>
        <div className="issue-comments">
          {this.state.comments.map(comment => (
            <IssueComment key={comment.id} comment={comment} />
          ))}
        </div>
        <hr className="divider" />

        <IssueCommentForm />
      </div>
    );
  }
}

export default IssueDetail;
