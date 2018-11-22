import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import HabitItemComponent from "../components/HabitItemComponent";

class HabitItemContainer extends Component {
  render() {
    const { habitItem } = this.props;

    return <HabitItemComponent habitItem={habitItem} />;
  }
}

const mapStateToProps = () => {
  return {};
};

HabitItemContainer.propTypes = {
  habitItem: PropTypes.object
};

export default connect(mapStateToProps)(HabitItemContainer);
