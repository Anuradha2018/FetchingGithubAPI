import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import PrivateRoute from "./PrivateRoute";

import App from "./App";
import IssueDetail from "./components/IssueDetail";
import NotFound from "./components/NotFound/index";
import Login from "./components/Login/index";
// import { AuthContext } from "./context/auth";

// const [authTokens, setAuthTokens] = useState();
// const setTokens = data => {
//   localStorage.setItem("tokens", JSON.stringify(data));
// setAuthTokens(data);
// };
const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/issues/:number" component={IssueDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={App} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
