import React from "react";

const Issue = props => {
  return (
    <form onSubmit={props.getIssue}>
      <p>Issue</p>
      <input
        style={{ marginTop: "20px", display: "block" }}
        type="text"
        name="param"
      ></input>
      <button>Submit </button>
    </form>
  );
};
export default Issue;
