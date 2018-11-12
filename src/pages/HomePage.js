import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../components/Logo";
import EnterButtonContainer from "../containers/EnterButtonContainer";
import HomeHeaderContainer from "../containers/HomeHeaderContainer";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <HomeHeaderContainer />
        <Logo />
        <EnterButtonContainer />
      </div>
    );
  }
}

export default HomePage;
