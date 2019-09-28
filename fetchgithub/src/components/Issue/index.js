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
          <Link
            className="link"
            to={`/issues/${issue.number}?user=${user}&repo=${repo}`}
          >
            <span>
              <svg
                className="issue-opened-icon"
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
            </span>
            {issue.title}
          </Link>
        </h5>
      </div>

      <div className="comment">
        <span></span>
        <span className="issue-comment">
          <svg
            className="octicon octicon-comment v-align-middle"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"
            ></path>
          </svg>
          {issue.comments}
        </span>
      </div>
    </div>
  );
};

export default Issue;
