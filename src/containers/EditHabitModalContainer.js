import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditHabitModalComponent from '../components/EditHabitModalComponent';
import { getItem, deleteItem } from '../dux/items'

class EditHabitModalContainer extends Component {

  render() {
     const { habitItem, getItem, deleteItem } = this.props;

    return (
      <EditHabitModalComponent getItem={getItem} deleteItem={deleteItem} habitItem={habitItem}/>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  // console.log('ownProps.habitItemId', ownProps.habitItem)
  // ownProps.habitItemId
  // Retrieve and return Habit Item from store, by using the id
  // hint: use store.items.find()
  return {
    habitItem: ownProps.habitItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    //addNewItem: (title, planning) => dispatch(addNewItem({ title, planning }))
    getItem: (habitItem) => dispatch(getItem(habitItem)),
    deleteItem: (habitItem) => dispatch(deleteItem(habitItem.id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHabitModalContainer);
