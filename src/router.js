import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import EditSong from "pages/EditSong";
import ErrorPage from "pages/ErrorPage";

const BasicRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/editSong/:id" component={EditSong}></Route>
    <Route component={ErrorPage} />
  </Switch>
);

export default BasicRoute;
