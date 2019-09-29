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
      {/* <div key={comment.id} className="discussion_bucket">
        <div className="commentBox">
          <div className="avatar">
            <img
              className="photo"
              alt="avatar"
              src={comment.user.avatar_url}
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
      <hr className="divider"></hr>
      <div className="commentBoxPost">
        <div className="commentBox">
          <div className="avatar">
            <img className="photo" alt="avatar" src=""></img>
          </div>
          <div className="commentContent">
            <div className="commentHeader">
              <h3 className="headerText">
                <strong>dsndsvj</strong> commented{" "}
              </h3>
            </div>
            <div>
              <textarea className="text-area"></textarea>
            </div>
            <textarea className="commentBody"></textarea>
            <div className="reactions">
              <form className="formReactions"></form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default IssueComment;
