import React, { Component } from "react";

class User extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let users = data.map(user => {
          return (
            <div>
              <a key={user.id} className="dropdown-item" href="">
                {user.login}
              </a>
            </div>
          );
        });
        this.setState({ users: users });
        console.log("state", this.state.users);
      });
  }
  render() {
    return <div>{this.state.users}</div>;
  }
}

// const UserRepo = props => {
//   return (
//     <form>
//       <input
//         style={{ marginTop: "20px", display: "block" }}
//         type="text"
//         name="username"
//       ></input>
//       <input
//         style={{ marginTop: "20px", display: "block" }}
//         type="text"
//         name="repo"
//       ></input>
//       <button>Submit </button>
//     </form>
//   );
// };
export default User;
