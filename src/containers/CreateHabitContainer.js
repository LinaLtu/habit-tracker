import React from 'react';
import { connect } from 'react-redux';
import CreateHabitComponent from '../components/CreateHabitComponent';

const CreateHabitContainer = () => {
  return (
    <CreateHabitComponent />
  );
};

export default connect(null)(CreateHabitContainer);
