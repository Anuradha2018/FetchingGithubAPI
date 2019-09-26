import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import IssueDetail from "./components/IssueDetail";

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/issues/:number" component={IssueDetail} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
