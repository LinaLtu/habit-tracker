import React, { Component } from "react";
import PropTypes from "prop-types";
import HabitItemContainer from "../containers/HabitItemContainer";

class HabitsListComponent extends Component {
  render() {
    const { habitsList } = this.props;

    return habitsList.map(habitItem => {
      <HabitItemContainer habitItem={habitItem} />;
    });
  }
}

HabitsListComponent.propTypes = {
  habitsList: PropTypes.array.isRequired
};

export default HabitsListComponent;
