import React from "react";
import "./style.css";

function IssueComments({ comments }) {
  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id} className="discussion_bucket">
          <div className="commentBox">
            <div className="avatar">
              <img
                className="photo"
                alt="avatar"
                src="https://avatars0.githubusercontent.com/u/43185848?v=4"
              ></img>
            </div>
            <div className="commentContent">
              <div className="commentHeader">
                <h3 className="headerText">
                  <strong>{comment.user.login}</strong> commented{" "}
                </h3>
              </div>
              <div classname="body">
                <p>{comment.body}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IssueComments;
