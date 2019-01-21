import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateHabitContainer from '../containers/CreateHabitContainer';

class HabitsHeaderComponent extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="habits-header">
        <div className="habits-title">{title}</div>
        <div><CreateHabitContainer /></div>
      </div>
    );
  }
}

HabitsHeaderComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default HabitsHeaderComponent;
