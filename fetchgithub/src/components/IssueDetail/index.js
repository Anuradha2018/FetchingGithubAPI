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
      issueNumber: null,
      state: null
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
        issueNumber,
        state: data.state
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
    const { title, issueNumber, state } = this.state;
    return (
      <div className="issue-detail">
        <div className="title">
          <h1 className="titleHeader">
            {title} <span className="issue-id">{`#${issueNumber}`}</span>
          </h1>
        </div>

        <div className="issueStatus">
          <span className="state">
            <svg
              className="issue-icon"
              viewBox="0 0 14 16"
              version="1.1"
              width="14"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
              ></path>
            </svg>
            &nbsp;
            {state}
          </span>
        </div>

        <div className="issue-comments">
          {this.state.comments.map(comment => (
            <IssueComment key={comment.id} comment={comment} />
          ))}
        </div>
        <hr className="divider" />

        <IssueCommentForm
          user={this.state.user}
          repo={this.state.repo}
          issueNumber={this.state.issueNumber}
        />
      </div>
    );
  }
}

export default IssueDetail;
