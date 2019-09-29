import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export default class IssueCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
  }
  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onClick = event => {
    event.preventDefault();
    console.log(this.state);
    console.log(this.props.user);
    axios
      .post(
        `https://api.github.com/repos/${this.props.user}/${this.props.repo}/issues/${this.props.issueNumber}/comments`,
        this.state
      )
      .then(res => {
        console.log(res);
      });
  };
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
            <textarea
              placeholder="Leave a comment"
              name="body"
              onChange={this.changeHandler}
            ></textarea>
          </div>
          <div className="comment-footer">
            <button
              className="submitButton"
              type="submit"
              onClick={this.onClick}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
    );
  }
}
