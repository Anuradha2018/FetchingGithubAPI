import React, { Component } from "react";
import "./style.css";

export default class IssueCommentForm extends Component {
  render() {
    return (
      <div className="comment-form">
        <img src="" alt="" className="avatar" />
        <div className="comment-box">
          <div className="comment-header">
            <span className="write">Write</span>
            <span className="preview">Preview</span>
          </div>
          <div className="comment-body">
            <textarea placeholder="Leave a comment"></textarea>
          </div>
          <div className="comment-footer" />
        </div>
      </div>
    );
  }
}
