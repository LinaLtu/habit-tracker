import moment from 'moment';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CSS_NS = 'habits';

class HabitsItemComponent extends Component {
  getSymbol(planning, progress, day) {
    const dayOfTheWeek = day.isoWeekday();

    const isPlanned = planning[dayOfTheWeek] === true;

    if (!isPlanned) {
      return '-';
    }

    if (progress[day.format('YYYY-MM-DD')] === true) {
      return 'v';
    }

    // To use moment comparison, we must ensure the two moment instances have
    // the same time, so that the are the "same" exactly when the day coincide
    // Alternative:
    // if (day.format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD')) {}
    if (day.startOf('day').isSameOrAfter(moment().startOf('day'))) {
      return 'fut';
    }

    return 'pas';
  }

  render() {
    const { habitItem, daysArray } = this.props;

    const daysNodes = daysArray.map(day => {
      return (
        <div key={day.format()} className={`${CSS_NS}__day-box`}>
          {this.getSymbol(habitItem.planning, habitItem.progress, day)}
        </div>
      );
    });

    return (
      <div className={CSS_NS}>
        <div className={`${CSS_NS}__title`}>{habitItem.title}</div>
        {daysNodes}
      </div>
    );
  }
}

HabitsItemComponent.propTypes = {
  habitItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    planning: PropTypes.shape({
      1: PropTypes.bool.isRequired,
      2: PropTypes.bool.isRequired,
      3: PropTypes.bool.isRequired,
      4: PropTypes.bool.isRequired,
      5: PropTypes.bool.isRequired,
      6: PropTypes.bool.isRequired,
      7: PropTypes.bool.isRequired
    }),
    progress: PropTypes.objectOf(PropTypes.string)
  }),
  daysArray: PropTypes.array.isRequired
};

export default HabitsItemComponent;
