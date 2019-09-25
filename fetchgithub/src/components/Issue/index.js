import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Issue = ({ issue }) => {
  return (
    <div className="issue">
      <div className="detail">
        <h5 className="title" title={issue.title}>
          <span>
            <FontAwesomeIcon
              className="icon"
              icon={faExclamationCircle}
            ></FontAwesomeIcon>
          </span>
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
