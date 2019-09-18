import React from "react";

const UserRepo = props => {
  return (
    <form>
      <input
        style={{ marginTop: "20px", display: "block" }}
        type="text"
        name="username"
      ></input>
      <input
        style={{ marginTop: "20px", display: "block" }}
        type="text"
        name="repo"
      ></input>
      <button>Submit </button>
    </form>
  );
};
export default UserRepo;
