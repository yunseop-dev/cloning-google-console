import React from "react";
import { Route, Switch } from "react-router-dom";
import News from "../pages/News";
import Home from "../pages/Home";
import Users from "../pages/Users";

const PageSwitcher = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/News" component={News} />
    <Route exact path="/users" component={Users} />
  </Switch>
);

export default PageSwitcher;
