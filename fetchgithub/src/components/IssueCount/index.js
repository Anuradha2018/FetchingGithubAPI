import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const IssueCount = ({ closedIssues, openedIssues }) => {
  return (
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
  );
};
export default IssueCount;
