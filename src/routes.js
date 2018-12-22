import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import News from "./components/pages/News";
import NewsShow from "./components/pages/News/NewsShow";

export default () => (
  <div>
    <Switch>
      <Route exact path="/news" component={News} />
      <Route exact path="/news/:id" component={NewsShow} />
      <Redirect from="/" to="/news" />
    </Switch>
  </div>
);
