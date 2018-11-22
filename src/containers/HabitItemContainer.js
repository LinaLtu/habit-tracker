import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HabitItemComponent from "../components/HabitItemComponent";

class HabitItemContainer extends Component {
  render() {
    return <HabitItemComponent />;
  }
}

const mapStateToProps = () => {
  return {};
};

HabitItemContainer.propTypes = {
  habitItem: PropTypes.object
};

export default connect(mapStateToProps)(HabitItemContainer);
