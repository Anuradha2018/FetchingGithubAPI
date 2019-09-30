import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import App from "./App";
import IssueDetail from "./components/IssueDetail";

import NotFound from "./components/NotFound/index";
import Login from "./components/Login/index";

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/issues/:number" component={IssueDetail} />
        <Route exact path="/" component={Login} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
