import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Issue = ({ issue, closedIssues, openedIssues }) => {
  return (
    <div className="issue">
      <div className="detail">
        <h6>
          <span>
            <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
          </span>
          {openedIssues} Open &nbsp; &nbsp;
          <span>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
          </span>
          {closedIssues} Closed
        </h6>
        <h5 className="title" title={issue.title}>
          {issue.title}
        </h5>
      </div>

      <div className="comment">
        <span></span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {issue.comments}
        </span>
      </div>
    </div>
  );
};

export default Issue;
