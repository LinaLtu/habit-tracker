import React, { Component } from "react";
import PropTypes from "prop-types";

const CSS_NS = "habits";

class HabitsListHeader extends Component {
  render() {
    const { daysArray } = this.props;

    const daysBoxes = daysArray.map(day => {
      return (
        <div key={day.format()} className={`${CSS_NS}__day-box`}>
          {day.format("ddd DD MMM")}
        </div>
      );
    });

    return (
      <div className={CSS_NS}>
        <div className={`${CSS_NS}__title`} />
        {daysBoxes}
      </div>
    );
  }
}

HabitsListHeader.propTypes = {
  daysArray: PropTypes.array.isRequired
};

export default HabitsListHeader;
