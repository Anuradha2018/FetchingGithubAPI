import React, { Component } from "react";
import axios from "axios";
import qs from "query-string";
import "./style.css";

class IssueDetail extends Component {
  componentDidMount() {
    const { match } = this.props;
    const { number } = match.params;
    const { repo, user } = qs.parse(this.props.location.search);
    this.getIssueDetail(user, repo, number);
  }

  getIssueDetail = async (user, repositoryName, issueNumber) => {
    try {
      const { data } = await axios(
        `https://api.github.com/repos/${user}/${repositoryName}/issues/${issueNumber}`
      );
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    return (
      <div className="issue-detail">
        <div className="header">
          <span className="username">anu</span>{" "}
          <code>commented 5 days ago</code>
        </div>
      </div>
    );
  }
}

export default IssueDetail;
