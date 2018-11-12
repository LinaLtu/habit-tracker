import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../components/Header.js";
import App from "../components/App.js";
// import { createHistory } from 'history';

// const baseElement = document.querySelector('base');
// const baseHref = baseElement ? baseElement.getAttribute('href') : '/';
// const browserHistory = useRouterHistory(createHistory)({
//   basename: baseHref
// });

const router = () => (
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/ciao/" component={Header} />
  </Router>
);

export default router;
