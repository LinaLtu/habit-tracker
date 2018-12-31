import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HabitItemComponent from '../components/HabitItemComponent';
import { markAsDone } from '../dux/items'

class HabitItemContainer extends Component {
  render() {
    const { habitItem, daysArray, markAsDoneHandleClick } = this.props;

    return <HabitItemComponent
      habitItem={habitItem}
      daysArray={daysArray}
      markAsDoneHandleClick={markAsDoneHandleClick}
    />;
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    markAsDoneHandleClick: markAsDone
  };
};

HabitItemContainer.propTypes = {
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
    progress: PropTypes.objectOf(PropTypes.bool)
  }),
  daysArray: PropTypes.array.isRequired,
  markAsDoneHandleClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HabitItemContainer);
