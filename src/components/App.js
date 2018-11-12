import React, { Component } from "react";
import PropTypes from "prop-types";
import router from "../router/index";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return <HomePage />;
  }
}

export default App;
