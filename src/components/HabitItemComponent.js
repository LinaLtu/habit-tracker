import React, { Component } from "react";
import PropTypes from "prop-types";

class HabitsItemComponent extends Component {
  render() {
    return <div>Item</div>;
  }
}

HabitsItemComponent.propTypes = {
  habitItem: PropTypes.object
};

export default HabitsItemComponent;
