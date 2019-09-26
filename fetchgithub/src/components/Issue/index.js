import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./style.css";

const Issue = ({ issue, user, repo }) => {
  return (
    <div className="issue">
      <div className="detail">
        <h5 className="title" title={issue.title}>
          <Link to={`/issues/${issue.number}?user=${user}&repo=${repo}`}>
            <span>
              <FontAwesomeIcon
                className="icon"
                icon={faExclamationCircle}
              ></FontAwesomeIcon>
            </span>
            {issue.title}
          </Link>
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
