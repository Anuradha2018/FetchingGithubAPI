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
                src="{comment.user.avatar_url}"
              ></img>
            </div>
            <div className="commentContent">
              <div className="commentHeader">
                <h3 className="headerText">
                  <strong>{comment.user.login}</strong> commented{" "}
                </h3>
              </div>
              <div className="body">
                <p>{comment.body}</p>
              </div>
              <div className="reactions">
                <form className="formReactions"></form>
              </div>
            </div>
          </div>
        </div>
      ))}
      <hr className="divider"></hr>
      <div className="commentPost">
        <div className="commentBox">
          <div className="avatar">
            <img className="photo" alt="avatar" src=""></img>
            <div className="commentContent">
              <div className="commentHeader">
                <h3 className="headerText">
                  <strong></strong> commented{" "}
                </h3>
              </div>
              <div className="body">
                <p></p>
              </div>
              <div className="reactions">
                <form className="formReactions"></form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueComments;
