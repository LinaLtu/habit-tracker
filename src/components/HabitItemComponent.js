import moment from 'moment';
import React, { Component } from 'react';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';

const CSS_NS = 'habits';

class HabitsItemComponent extends Component {
  /**
   * Get and return symbol of input day, based on planning and progress
   *
   * @param {object} planning
   * @param {object} progress
   * @param {moment} day
   * @return {string}
   */
  getSymbol(planning, progress, day) {
    const dayOfTheWeek = day.isoWeekday();
    let materialIcons = '';
    let materialIconColor = '';

    const isPlanned = planning[dayOfTheWeek] === true;

    if (!isPlanned) {
      // The habit is not planned
      materialIcons = 'clear';
      materialIconColor = '#757575'
    } else if (progress[day.format('YYYY-MM-DD')] === true) {
      // The habit is planned and done
      materialIcons = 'check_box';
      materialIconColor = '#1B5E20';
      // To use moment comparison, we must ensure the two moment instances have
      // the same time, so that the are the "same" exactly when the day coincide
      // Alternative:
      // if (day.format('YYYY-MM-DD') >= moment().format('YYYY-MM-DD')) {}
    } else if (day.startOf('day').isSameOrAfter(moment().startOf('day'))) {
      // The habit is planned, not yet done
      materialIcons = 'schedule';
      materialIconColor = '#b38f00';
    } else {
      // The habit had been planned in the past, but has not been done
      materialIcons = 'clear';
      materialIconColor = '#b71c1c';
    }

    return (<MaterialIcon icon={ materialIcons } color={ materialIconColor } size={20} />);
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
