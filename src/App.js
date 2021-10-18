import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Article from "./Article";
import Collection from "./Collection";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={Collection}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/Article/simplymincy/:path`}
            component={Article}
          />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
