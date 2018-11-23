import React, { Component } from "react";
import PropTypes from "prop-types";
import HabitItemContainer from "../containers/HabitItemContainer";
import HabitsListHeader from "./HabitsListHeader";
import { getDaysArray } from "../helpers/dates";

class HabitsListComponent extends Component {
  render() {
    const { habitsList } = this.props;
    const daysArray = getDaysArray();

    const habitItems = habitsList.map(habitItem => {
      return (
        <HabitItemContainer
          key={habitItem.id}
          habitItem={habitItem}
          daysArray={daysArray}
        />
      );
    });

    return (
      <React.Fragment>
        <HabitsListHeader daysArray={daysArray} />
        {habitItems}
      </React.Fragment>
    );
  }
}

HabitsListComponent.propTypes = {
  habitsList: PropTypes.array.isRequired
};

export default HabitsListComponent;
