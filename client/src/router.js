import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import EditSong from "pages/EditSong";
import AddSinger from "pages/AddSinger";
import SearchSinger from "pages/SearchSinger";
import SearchAlbum from "pages/SearchAlbum";
import ErrorPage from "pages/ErrorPage";

const BasicRoute = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/searchSinger/:id" component={SearchSinger} />
    <Route exact path="/searchAlbum/:id" component={SearchAlbum} />
    <Route exact path="/editSong/:id" component={EditSong}></Route>
    <Route exact path="/addSinger" component={AddSinger}></Route>
    <Route component={ErrorPage} />
  </Switch>
);

export default BasicRoute;
