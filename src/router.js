import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import AddSong from "pages/AddSong";

const BasicRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/addSong" component={AddSong} />
  </Switch>
);

export default BasicRoute;
