import React from "react";
import { Route } from "react-router";
import Header from "../components/Header.js";

const routes = (
  <Route path="/">
    <Route path="/ciao" component={Header} />
  </Route>
);

export default routes;
