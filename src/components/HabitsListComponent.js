import React, { Component } from "react";
import PropTypes from "prop-types";
import HabitItemContainer from "../containers/HabitItemContainer";

class HabitsListComponent extends Component {
  render() {
    const { habitsList } = this.props;

    const habitItems = habitsList.map(habitItem => {
      return <HabitItemContainer key={habitItem.id} habitItem={habitItem} />;
    });

    return <div>{habitItems}</div>;
  }
}

HabitsListComponent.propTypes = {
  habitsList: PropTypes.array.isRequired
};

export default HabitsListComponent;
