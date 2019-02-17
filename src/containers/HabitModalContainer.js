import React, { Component } from 'react';
import { connect } from 'react-redux';
import HabitModalComponent from '../components/HabitModalComponent';
import { addNewItem } from '../dux/items'

class HabitModalContainer extends Component {
  render() {
    const { addNewItem } = this.props;

    return (
      <HabitModalComponent addNewItem={addNewItem} />
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewItem: (title, planning) => dispatch(addNewItem({ title, planning }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitModalContainer);
