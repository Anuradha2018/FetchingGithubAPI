import React from "react";
import "./style.css";

function IssueComment({ comment }) {
  return (
    <div className="issue-comment">
      <img src={comment.user.avatar_url} alt="" className="avatar" />
      <div className="comment-box">
        <div className="comment-header">
          <p className="user">{comment.user.login}</p>
        </div>
        <div className="comment-body">
          <p>{comment.body}</p>
        </div>
        <div className="comment-footer" />
      </div>
    </div>
  );
}

export default IssueComment;
