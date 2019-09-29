import React from "react";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

const IssueCount = ({ closedIssues, openedIssues }) => {
  return (
    <div className="issueCount">
      <div className="detail">
        <span className="issue-opened">
          <svg
            className="issue-closed-icon"
            viewBox="0 0 14 16"
            version="1.1"
            width="14"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
            ></path>
          </svg>
          &nbsp; &nbsp;
          {openedIssues} Open &nbsp; &nbsp;
        </span>

        <span className="issue-closed">
          <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          &nbsp; &nbsp;
          {closedIssues} Closed
        </span>
      </div>
    </div>
  );
};
export default IssueCount;
