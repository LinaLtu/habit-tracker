import React, { Component } from "react";
import PropTypes from "prop-types";

class HabitsItemComponent extends Component {
  render() {
    const { habitItem } = this.props;

    return <div>{habitItem.title}</div>;
  }
}

HabitsItemComponent.propTypes = {
  habitItem: PropTypes.object
};

export default HabitsItemComponent;
