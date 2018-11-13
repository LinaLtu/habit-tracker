import React, { Component } from "react";
import PropTypes from "prop-types";
import HabitsHeaderContainer from "../containers/HabitsHeaderContainer";

class HabitsHeaderComponent extends Component {
  render() {
    return (
      <div className="habits-header">
        <HabitsHeaderContainer />
        <span>This is a button</span>
      </div>
    );
  }
}

export default HabitsHeaderComponent;
