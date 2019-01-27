import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HabitItemContainer from '../containers/HabitItemContainer';
import HabitsListHeader from './HabitsListHeader';
import { getDaysArray } from '../helpers/dates';

class HabitsListComponent extends Component {
  render() {
    const { habitsList } = this.props;
    const daysArray = getDaysArray();

    const habitItems = habitsList.items.map(habitItem => {
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

//Failed prop type: checker is not a function

// HabitsListComponent.propTypes = {
//   habitsList: PropTypes.shape([
//     {
//       id: PropTypes.string,
//       title: PropTypes.string,
//       planning: PropTypes.shape({
//         1: PropTypes.bool,
//         2: PropTypes.bool,
//         3: PropTypes.bool,
//         4: PropTypes.bool,
//         5: PropTypes.bool,
//         6: PropTypes.bool,
//         7: PropTypes.bool
//       }),
//       progress: PropTypes.shape({
//         '2018-12-02': PropTypes.bool,
//         '2018-12-08': PropTypes.bool
//       })
//     }
//   ])
// };

export default HabitsListComponent;
