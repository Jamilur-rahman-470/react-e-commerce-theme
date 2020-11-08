import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../data/routes";
import Navbar from "../widgets/_navbar";

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        {routes.map((i, k) => (
          <Route path={i.path} component={i.comp} key={k} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default RootRoute;
