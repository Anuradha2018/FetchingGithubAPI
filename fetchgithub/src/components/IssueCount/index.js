import React from "react";

import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const IssueCount = ({ closedIssues, openedIssues }) => {
  return (
    <div className="issueCount">
      <div className="detail">
        <h6>
          <span>
            <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
          </span>
          &nbsp; &nbsp;
          {openedIssues} Open &nbsp; &nbsp;
          <span>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </span>
          &nbsp; &nbsp;
          {closedIssues} Closed
        </h6>
      </div>
    </div>
  );
};
export default IssueCount;
